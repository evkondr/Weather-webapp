import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="card__gradient" />
      <div className="card__content">
        <div className="card__up">
          <p>Вторник</p>
          <p>15 янв 2022</p>
          <p>Париж, ФР</p>
        </div>
        <div className="card__bottom">
          <div className="icon" />
          <div className="temp">
            <span>29 C</span>
            <span>Sunny</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
