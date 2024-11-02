import React, {useState} from "react";
import Calendar from "../components/Calendar/Calendar";
import Modal from "../components/UI/Modal";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import Button from "../components/UI/Button";
import { set, ref } from "firebase/database";
import { database } from "../firebase/Firebase";
import Todo from "../interfaces/Todo";

export interface AppState {
  activeDateTimestamp: number,
  openWeekTimestamp: number,
  todos: Map<string, Todo>
}

export interface ModalState {
  status: boolean,
  mode: string,
  todo?: Todo,
}

const Home = () => {
  const [appState, setAppState] = useState<AppState>({
    activeDateTimestamp: new Date().getTime(),
    openWeekTimestamp: new Date().getTime(),
    todos: new Map<string, Todo>(),
  });
  const [modal, setModal] = useState<ModalState>({
    status: false,
    mode: 'add',
  });

  const setTodo = (id: string, todo: Todo) => {
    setAppState(prevState => {
      let todos = prevState.todos;
      todos.set(id, todo);

      return ({
        ...prevState,
        todos: todos,
      })
    })

    const todoRef = ref(database, `/todos/${id}`);
    set(todoRef, {...todo});
  }

  const openModalWithAddForm = () => {
    setModal({mode: 'add', status: true});
  }
  const openModalWithEditForm = (todo: Todo) => {
    setModal({mode: 'edit', status: true, todo: todo});
  }

  const deleteTodo = (id: string): void => {
    const todoRef = ref(database, `/todos/${id}`);
    set(todoRef, null);
  }

  const closeModal = () => {
    setModal(prevState => ({...prevState, status: false}));
  }

  const setActiveDateTimestamp = (timestamp: number) => {
    setAppState(prevState => ({...prevState, activeDateTimestamp: timestamp}));
  }

  return (
        <>
          <div className="flex max-w-sm md:max-w-none pt-6">
            <Calendar activeDateTimestamp={appState.activeDateTimestamp}
                      onClick={setActiveDateTimestamp}/>
          </div>
          <div>
            <Modal
              isOpen={modal.status}
              onClose={closeModal}
            >
              <TodoForm items={appState.todos}
                        item={modal.todo}
                        timestamp={appState.activeDateTimestamp}
                        setTodo={setTodo}
                        onClose={closeModal}/>
            </Modal>
          </div>
          <div>
            <TodoList
              timestamp={appState.activeDateTimestamp}
              setTodo={setTodo}
              onClickEdit={openModalWithEditForm}
              onClickDelete={deleteTodo}
            />
          </div>
          <div className="flex pt-6">
            <Button onClick={openModalWithAddForm}>
              <span>Add TODO</span>
            </Button>
          </div>
        </>
  );
}

export default Home;