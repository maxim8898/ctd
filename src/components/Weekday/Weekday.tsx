import React from "react";
import classNames from "classnames";

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
    const isCurrentDate = new Date().getDate() === date;

    return (
        <div
            className={classNames(
                'flex group mx-1 cursor-pointer justify-center w-16 relative',
                isCurrentDate ? 'bg-purple-600 shadow-lg dark-shadow rounded-lg' : 'hover:bg-purple-500 hover:shadow-lg hover-dark-shadow transition-all duration-300 rounded-lg'
            )}
        >
            {isCurrentDate && (
                <span className="flex h-3 w-3 absolute -top-1 -right-1">
                    <span
                        className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
                </span>
            )}
            <div className="flex items-center px-4 py-4">
                <div className="text-center">
                    <p className={classNames(
                        'text-sm',
                        isCurrentDate ? 'text-gray-100' : 'text-gray-900 group-hover:text-gray-100 transition-all duration-300'
                    )}>
                        {weekday}
                    </p>
                    <p className={classNames(
                        'mt-3',
                        isCurrentDate ? 'text-gray-100 font-bold' : 'text-gray-900 group-hover:text-gray-100 group-hover:font-bold transition-all duration-300'
                    )}>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Weekday
