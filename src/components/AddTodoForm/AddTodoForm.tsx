import React, {useState} from "react";
import {Todo} from "../../App";
import uuid from 'react-uuid';
import DatePicker from "../DatePicker/DatePicker";

interface AddTodoFormProps {
    item?: Todo,
    items: Map<string, Todo>,
    timestamp: number,
    setTodo: (id: string, todo: Todo) => void,
    onClose: () => void,
}
function AddTodoForm({ item, items, timestamp, setTodo, onClose }: AddTodoFormProps) {
    const [text, setText] = useState(item ? item.text : '');
    const [datepickerTimestamp, setDatepickerTimestamp] = useState(timestamp);
    function editTodo() {
        if (typeof item !== 'undefined') {
            item.text = text;
            setTodo(item.id, item);
        } else {
            const id = uuid();
            const newItem = {
                id: id,
                status: false,
                text: text,
                date: datepickerTimestamp,
            };
            setTodo(id, newItem);
        }

        onClose();
    }

    return (
        <>
            <DatePicker timestamp={datepickerTimestamp} changeDate={setDatepickerTimestamp}/>
            <div className="relative h-10 w-72 mx-auto">
                <input
                    className="peer h-full w-full rounded-[7px] border border-purple-600 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-purple-600 placeholder-shown:border-t-purple-600 focus:border-2 focus:border-purple-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    defaultValue={item && item.text}
                    onChange={(e) => {setText(e.target.value)}}
                />
                <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-purple-600 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-purple-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-purple-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-purple-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-purple-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-purple-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    TODO
                </label>
            </div>
            <button className="flex h-10 w-40 my-4 mx-auto items-center justify-center overflow-hidden bg-purple-600 rounded-lg font-medium text-white"
                onClick={(e) => {editTodo()}}
            >Add</button>
        </>
    )
}

export default AddTodoForm;