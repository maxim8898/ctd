import React, {useState} from "react";
import classNames from "classnames";

interface DatepickerData {
    showDatepicker: boolean,
    datepickerValue: string,
    month: number,
    year: number,
    noOfDays: number[],
    blankDays: number[],
    days: string[],
}

function DatePicker() {
    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const today = new Date();
    let daysInMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0).getDate();
    let dayOfWeek = new Date(today.getFullYear(), today.getMonth() + 1).getDay();
    let blankdaysArray: number[] = [];
    for ( let i=1; i <= dayOfWeek; i++) {
        blankdaysArray.push(i);
    }

    let daysArray: number[] = [];
    for ( let i=1; i <= daysInMonth; i++) {
        daysArray.push(i);
    }

    const [date, setDate] = useState<DatepickerData>({
        showDatepicker: false,
        datepickerValue: new Date().toDateString(),
        month: today.getMonth(),
        year: today.getFullYear(),
        noOfDays: daysArray,
        blankDays: blankdaysArray,
        days: DAYS,
    });

    function setDateValue(value:number) {
        setDate(prevState => ({
            ...prevState,
            datepickerValue: new Date(date.year, date.month, value).toDateString(),
            showDatepicker: false,
        }));
    }

    return (
        <div className="container mx-auto px-2">
            <div className="my-3 mx-auto w-72">
                <div className="relative">
                    <input type="hidden" name="date" x-ref="date" />
                    <input type="text" readOnly={true}
                        className="w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                        placeholder="Select date"
                           value={date.datepickerValue}
                           onClick={() => setDate(prevState => ({...prevState, showDatepicker: !date.showDatepicker}))}
                    />
                    <div className="absolute top-0 right-0 px-3 py-2">
                        <svg className="h-6 w-6 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <div className={classNames(
                        "z-40 w-17rem bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0",
                        date.showDatepicker ? '' : 'hidden',
                    )}>
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <span className="text-lg font-bold text-gray-800">{MONTH_NAMES[date.month]}</span>
                                <span className="ml-1 text-lg text-gray-600 font-normal">{date.year}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-3 -mx-1">
                            {DAYS.map((day) => (
                                <div className="w-[14.28%] px-1">
                                    <div
                                        className="text-gray-800 font-medium text-center text-xs">
                                        {day}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap -mx-1">
                            {date.blankDays.map((day) => (
                                <div className="w-[14.28%] text-center border p-1 border-transparent text-sm"></div>
                            ))}
                            {date.noOfDays.map((day) => (
                                <div className="w-[14.28%] px-1 mb-1">
                                    <div
                                    className="cursor-pointer text-center text-sm leading-none
                                    rounded-full leading-loose transition ease-in-out
                                    duration-100 text-gray-700 hover:bg-blue-200"
                                    onClick={() => setDateValue(day)}
                                    >{day}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatePicker