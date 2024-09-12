import React, {useState} from 'react';
import './App.css';
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import List from "./components/List/TodoList";

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

function App() {
    const [appState, setAppState] = useState<AppState>({
        activeDateTimestamp: new Date().getTime(),
        openWeekTimestamp: new Date().getTime(),
        todos: new Map<string, Todo>(),
    });
    const [modalIsOpen, setModalOpen] = useState(false);

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

    function setActiveDateTimestamp(timestamp: number) {
        setAppState(prevState => ({...prevState, activeDateTimestamp: timestamp}))
    }

    return (
        <div className="flex items-center justify-start bg-gray-900 h-dvh p-2 flex-col">
          <div className="flex">
              <Header />
          </div>
          <div className="flex max-w-sm md:max-w-none pt-6">
              <Calendar activeDateTimestamp={appState.activeDateTimestamp}
                        onClick={setActiveDateTimestamp}/>
          </div>
          <div>
              <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalOpen(false)}
              >
                  <AddTodoForm items={appState.todos} timestamp={appState.activeDateTimestamp} setTodo={setTodo} onClose={() => setModalOpen(false)} />
              </Modal>
          </div>
          <div>
            <List items={appState.todos} timestamp={appState.activeDateTimestamp} setTodo={setTodo} />
          </div>
          <div className="flex pt-6">
              <Button onClick={setModalOpen} />
          </div>
        </div>
    );
}

export default App;
