import React, {useState} from 'react';
import './App.css';
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/List/TodoList";

export interface Todo {
  id: string,
  status: boolean,
  date: number,
  text: string,
}

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

function App() {
  const [appState, setAppState] = useState<AppState>({
    activeDateTimestamp: new Date().getTime(),
    openWeekTimestamp: new Date().getTime(),
    todos: new Map<string, Todo>(),
  });
  const [modal, setModal] = useState<ModalState>({
    status: false,
    mode: 'add',
  });

  function setTodo(id: string, todo: Todo) {
    setAppState(prevState => {
      let todos = prevState.todos;
      todos.set(id, todo);

      return ({
        ...prevState,
        todos: todos,
      })
    })
  }

  function openModalWithAddForm() {
    setModal({mode: 'add', status: true});
  }
  function openModalWithEditForm(todo: Todo) {
    setModal({mode: 'edit', status: true, todo: todo});
  }

  function closeModal() {
    setModal(prevState => ({...prevState, status: false}));
  }

  function setActiveDateTimestamp(timestamp: number) {
    setAppState(prevState => ({...prevState, activeDateTimestamp: timestamp}));
  }

  return (
    <div className="flex items-center justify-start bg-gray-900 h-dvh p-2 flex-col">
      <div className="flex">
        <Header/>
      </div>
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
          items={appState.todos}
          timestamp={appState.activeDateTimestamp}
          setTodo={setTodo}
          openEdit={openModalWithEditForm}
        />
      </div>
      <div className="flex pt-6">
        <Button onClick={openModalWithAddForm}>
          <span>Add TODO</span>
        </Button>
      </div>
    </div>
  );
}

export default App;
