import React from "react";
import {Todo} from "../../App";
import Button from "../UI/Button";

interface ListProps {
  items: Map<string, Todo>,
  timestamp: number,
  setTodo: (id: string, todo: Todo) => void,
  onClickEdit: (todo: Todo) => void,
  onClickDelete: (id: string) => void,
}

const TodoList: React.FC<ListProps> = ({items, timestamp, setTodo, onClickEdit, onClickDelete}) => {
  const todos = Array.from(items).filter(([id, todo]) => {
    return (new Date(todo.date)).getDate() === (new Date(timestamp)).getDate();
  });

  const handleNewStatus = (todo: Todo) => {
    setTodo(todo.id, {...todo, status: !todo.status})
  }

  return (
    <>
      {todos.length ? todos.map(([id, todo]) => (
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