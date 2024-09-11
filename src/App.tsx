import React, {useState} from 'react';
import './App.css';
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import List from "./components/List/List";

export interface Todo {
    id: string,
    status: boolean,
    date: number,
    text: string,
}

function App() {
    const [todos, setTodos] = useState(new Map<string, Todo>());
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <div className="flex items-center justify-start bg-gray-900 h-dvh p-2 flex-col">
          <div className="flex">
              <Header />
          </div>
          <div className="flex max-w-sm md:max-w-none pt-6">
              <Calendar />
          </div>
          <div>
              <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalOpen(false)}
              >
                  <AddTodoForm items={todos} setTodos={setTodos} onClose={() => setModalOpen(false)} />
              </Modal>
          </div>
          <div>
            <List items={todos} setTodos={setTodos} />
          </div>
          <div className="flex pt-6">
              <Button onClick={setModalOpen} />
          </div>
        </div>
    );
}

export default App;
