import React from "react";
import Weekday from "../Weekday/Weekday";

interface CalendarProps {
  activeDateTimestamp: number,
  openWeekTimestamp?: number,
  onClick: (timestamp: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({activeDateTimestamp, openWeekTimestamp, onClick}) => {
  const today: Date = openWeekTimestamp ? new Date(openWeekTimestamp) : new Date();
  const weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleWeekdayClick = (day: number) => {
    onClick(new Date(today.getFullYear(), today.getMonth(), day).getTime());
  }

  let date: number = today.getDate() - today.getDay();
  let days: number[] = [];

  for (let i = 0; i < 7; i++, date++) {
    days.push(date);
  }

  return (
    <div className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-auto mx-auto
            py-4 px-2  md:mx-12 no-scrollbar'>
      {days.map((day, id) => (
        <Weekday
          key={id}
          active={new Date(activeDateTimestamp).getDate() === day}
          marked={false}
          weekday={weekdays[id]}
          date={day}
          onClick={() => handleWeekdayClick(day)}/>
      ))}
    </div>
  )
}

export default Calendar;
