import React, { createContext, ReactElement, useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase/Firebase";

interface Todo {
  id: string,
  status: boolean,
  date: number,
  text: string,
}

interface Todos {
  todos: Map<string, Todo>
}

export const FirebaseContext = createContext<Todos>({todos: new Map<string, Todo>()});

interface FirebaseContextProviderProps {
  children: ReactElement,
}

interface Todo {
  id: string,
  status: boolean,
  date: number,
  text: string,
}

interface Todos {
  todos: Map<string, Todo>
}

const FirebaseContextProvider: React.FC<FirebaseContextProviderProps> = ({ children }: FirebaseContextProviderProps) => {
  const [todos, setTodos] = useState<Todos>({
    todos: new Map<string, Todo>()
  });
  const fetchData = () => {
    const todosRef = ref(database, `/todos/`);
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      setTodos({todos: data});
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FirebaseContext.Provider value={todos}>
      { children }
    </FirebaseContext.Provider>
  )
}

export default FirebaseContextProvider;