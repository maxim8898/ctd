import { createContext } from "react";
import Todo from "../../interfaces/Todo";
import Todos from "../../interfaces/Todos";

const DatabaseContext = createContext<Todos>({todos: new Map<string, Todo>()});

export default DatabaseContext;
