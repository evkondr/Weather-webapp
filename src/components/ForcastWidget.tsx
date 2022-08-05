import React from "react";
import { IDay } from "../interfaces";

interface IForcastWidjetProps{
  day: IDay,
  dayWeek: string
}
function ForcastWidjet(props:IForcastWidjetProps) {
  const { day, dayWeek } = props;
  return (
    <div className="forcast-widjet__card">
      <div className="icon">
        <img src={day.condition.icon} alt="" />
      </div>
      <div className="forcast-widjet__day">{dayWeek}</div>
      <div className="forcast-widjet__temp">{day.maxtemp_c}</div>
    </div>
  );
}

export default ForcastWidjet;
