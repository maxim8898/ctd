import React, { useContext } from "react";
import {Todo} from "../../pages/Home";
import Button from "../UI/Button";
import {FirebaseContext} from "../../contexts/FirebaseContext";

interface ListProps {
  timestamp: number,
  setTodo: (id: string, todo: Todo) => void,
  onClickEdit: (todo: Todo) => void,
  onClickDelete: (id: string) => void,
}

interface Todos {
  todos: Map<string, Todo>,
}

const TodoList: React.FC<ListProps> = ({timestamp, setTodo, onClickEdit, onClickDelete}) => {
  const { todos } = useContext<Todos>(FirebaseContext);

  const todosOnDate = Object.entries(todos).filter(([id, todo]) => {
    return (new Date(todo.date)).getDate() === (new Date(timestamp)).getDate();
  });

  const handleNewStatus = (todo: Todo) => {
    setTodo(todo.id, {...todo, status: !todo.status})
  }

  return (
    <>
      {todosOnDate.length ? todosOnDate.map(([id, todo]) => (
          <div key={id} className="mt-5 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                className="flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] items-center
                          justify-center rounded-md border border-gray-300 text-white/0 outline-none
                          checked:text-white hover:cursor-pointer checked:bg-brand-500"
                name="weekly"
                defaultChecked={todo.status}
                onChange={() => handleNewStatus(todo)}
              />
              <p className="text-base font-bold text-gray-100 dark:text-white">
                {todo.text}
              </p>
              <Button onClick={() => onClickEdit(todo)}>
                <span>edit</span>
              </Button>
              <Button onClick={() => onClickDelete(id)}>
                <span>delete</span>
              </Button>
            </div>
          </div>
        ))
        : (<span className="text-white">No TODOs for this date.</span>)
      }
    </>
  );
}

export default TodoList;