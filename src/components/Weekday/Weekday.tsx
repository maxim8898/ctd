import React from "react";
import ReactDOM from "react-dom/client";

export enum WEEKDAY {
    Mon = 'Mon',
    Tue = 'Tue',
    Wed = 'Wed',
    Thu = 'Thu',
    Fri = 'Fri',
    Sat = 'Sat',
    Sun = 'Sun',
}

interface WeekdayProps {
    date: number,
    weekday: WEEKDAY,
    active: boolean,
}
function Weekday({date, weekday, active}: WeekdayProps) {
    if (active) {
        return (
            <div className='flex group bg-purple-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16'>
            <span className="flex h-3 w-3 absolute -top-1 -right-1">
              <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
            </span>
                <div className='flex items-center px-4 py-4'>
                    <div className='text-center'>
                        <p className='text-gray-100 text-sm'> {weekday} </p>
                        <p className='text-gray-100  mt-3 font-bold'> {date} </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all duration-300 cursor-pointer justify-center w-16'>
                <div className='flex items-center px-4 py-4'>
                    <div className='text-center'>
                        <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all duration-300'> {weekday} </p>
                        <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> {date} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weekday
