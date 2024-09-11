import React from "react";
import Weekday, {WEEKDAY} from "../Weekday/Weekday";

function Calendar() {
    return (
        <div className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto
            py-4 px-2  md:mx-12'>
            <Weekday weekday={WEEKDAY.Sun} date={11} active={false} />
            <Weekday weekday={WEEKDAY.Mon} date={12} active={false} />
            <Weekday weekday={WEEKDAY.Tue} date={13} active={false} />
            <Weekday weekday={WEEKDAY.Wed} date={14} active={true} />
            <Weekday weekday={WEEKDAY.Thu} date={15} active={false} />
            <Weekday weekday={WEEKDAY.Fri} date={16} active={false} />
            <Weekday weekday={WEEKDAY.Sat} date={17} active={false} />
        </div>
    )
}

export default Calendar;
