import React, { ReactElement, useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebase/Firebase";
import Todo from "../../interfaces/Todo";
import Todos from "../../interfaces/Todos";
import DatabaseContext from "./databaseContext";

interface DatabaseContextProviderProps {
  children: ReactElement,
}

const DatabaseContextProvider: React.FC<DatabaseContextProviderProps> = ({ children }: DatabaseContextProviderProps) => {
  const [todos, setTodos] = useState<Todos>({
    todos: new Map<string, Todo>()
  });
  const fetchData = () => {
    const todosRef = ref(database, `/todos/`);
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      setTodos({
        todos: data ?? {}
      });
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DatabaseContext.Provider value={todos}>
      { children }
    </DatabaseContext.Provider>
  )
}

export default DatabaseContextProvider;