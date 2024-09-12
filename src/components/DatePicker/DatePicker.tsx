import React from "react";

interface DatepickerData {
    timestamp: number,
    changeDate: (timestamp: number) => void,
}

function DatePicker({timestamp, changeDate}: DatepickerData) {
    // Transform timestamp to 'YYYY-mm-dd' format.
    let defaultDate = new Date(timestamp);
    defaultDate.setMinutes(defaultDate.getMinutes() - defaultDate.getTimezoneOffset())
    const date = defaultDate.toJSON().slice(0 ,10);

    return (
        <div className="relative my-3 mx-auto w-72">
            <input id="id-date07" type="date" name="id-date07" className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                   onChange={(e) => {
                       return changeDate(new Date(e.target.value).getTime())
                   }}
                   defaultValue={date}
            />
            <label htmlFor="id-date07" className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\u00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"> Date </label>
        </div>
    )
}

export default DatePicker
