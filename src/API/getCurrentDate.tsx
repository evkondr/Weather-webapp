import { Months, dayOfWeek } from "../interfaces";

const getCurrentDate = (startDay?: number):{day:string, dayOfWeek:string} => {
  const date = new Date();
  const day:number = date.getDate();
  const month:string = Months[date.getMonth()];
  const year:number = date.getFullYear();
  let indexDay = date.getDay() - 1;
  if (startDay) {
    indexDay += startDay;
    if (indexDay > 6) indexDay = 0;
  }
  const dayWeek = dayOfWeek[indexDay];
  return {
    day: `${day} ${month} ${year}`,
    dayOfWeek: dayWeek,
  };
};
export default getCurrentDate;
