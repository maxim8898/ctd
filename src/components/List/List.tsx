import React from "react";
import {Todo} from "../../App";

interface ListProps {
    items: Map<string, Todo>,
    timestamp: number,
    setTodo: (id: string, todo: Todo) => void,
}
function List({ items, timestamp, setTodo }: ListProps) {
    return (
        <>
            {items && Array.from(items).map(([id, todo]) => {
                if (new Date(todo.date).getDate() === new Date(timestamp).getDate()) {
                    return (
                        <div key={id} className="mt-5 flex items-center justify-between p-2">
                            <div className="flex items-center justify-center gap-2">
                                <input
                                    type="checkbox"
                                    className="flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] items-center
                                        justify-center rounded-md border border-gray-300 text-white/0 outline-none
                                        checked:text-white hover:cursor-pointer checked:bg-brand-500"
                                    name="weekly"
                                    defaultChecked={todo.status}
                                    onChange={function() {setTodo(id, {...todo, status: !todo.status})}}
                                />
                                <p className="text-base font-bold text-gray-100 dark:text-white">
                                    {todo.text}
                                </p>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <span className="text-white">No TODOs for this date.</span>
                    )
                }
            }
            )}
        </>
    );
}

export default List;