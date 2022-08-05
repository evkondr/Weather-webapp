import React from "react";
import { IWeather } from "../interfaces";
import getCurrentDate from "../API/getCurrentDate";

type CardProps = {
  weather: IWeather | null
}
function Card({ weather }: CardProps) {
  return (
    <div className="card">
      <div className="card__gradient" />
      <div className="card__content">
        <div className="card__up">
          <p className="card__up-day">{getCurrentDate().dayOfWeek}</p>
          <p>{getCurrentDate().day}</p>
          <p className="card__up-location">
            {weather?.location.name}
            ,
            {" "}
            {weather?.location.country}
          </p>
        </div>
        <div className="card__bottom">
          <div className="icon">
            <img src={weather?.current.condition.icon} alt="" />
          </div>
          <div className="card__temp">
            <span>
              {weather?.current.temp_c}
              &deg;C
            </span>
            <span>{weather?.current.condition.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
