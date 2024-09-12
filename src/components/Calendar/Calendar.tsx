import React from "react";
import Weekday, {WEEKDAY} from "../Weekday/Weekday";

function Calendar() {
    return (
        <div className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-auto mx-auto
            py-4 px-2  md:mx-12 no-scrollbar'>
            <Weekday weekday={WEEKDAY.Sun} date={8} active={false} />
            <Weekday weekday={WEEKDAY.Mon} date={9} active={false} />
            <Weekday weekday={WEEKDAY.Tue} date={10} active={false} />
            <Weekday weekday={WEEKDAY.Wed} date={11} active={true} />
            <Weekday weekday={WEEKDAY.Thu} date={12} active={false} />
            <Weekday weekday={WEEKDAY.Fri} date={13} active={false} />
            <Weekday weekday={WEEKDAY.Sat} date={14} active={false} />
        </div>
    )
}

export default Calendar;
