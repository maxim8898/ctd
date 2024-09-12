import React from "react";
import {Todo} from "../../App";

interface ListProps {
    items: Map<string, Todo>,
    setTodos: (todos: Map<string, Todo>) => void,
}
function List({ items, setTodos }: ListProps) {
    function checkTodo(item: Todo) {
        const newItem = item;
        newItem.status = !newItem.status;
        items.set(item.id, item);

        setTodos(items);
    }


    return (
        <>
            {items && Array.from(items).map(([id, todo]) => (
                <div className="mt-5 flex items-center justify-between p-2">
                    <div className="flex items-center justify-center gap-2">
                        <input
                            type="checkbox"
                            className="flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] items-center
                                justify-center rounded-md border border-gray-300 text-white/0 outline-none
                                checked:text-white hover:cursor-pointer checked:bg-brand-500"
                            name="weekly"
                            defaultChecked={todo.status}
                            onChange={function() {checkTodo(todo)}}
                        />
                        <p className="text-base font-bold text-gray-100 dark:text-white">
                            {todo.text}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default List;