import React from "react";
import ForcastWidjet from "./ForcastWidget";
import Button from "./Button";

function Menu() {
  return (
    <div className="menu">
      {/* Details block */}
      <div className="details">
        <ul className="details__list">
          <li className="details__item">
            <span>PRECIPITATION</span>
            <span>0 %</span>
          </li>
          <li className="details__item">
            <span>HUMIDITY</span>
            <span>0 %</span>
          </li>
          <li className="details__item">
            <span>WIND</span>
            <span>0 km/h</span>
          </li>
        </ul>
      </div>
      {/* Forcast block */}
      <ForcastWidjet />
      {/* Change location block */}
      <div className="change">
        <Button>Change location</Button>
      </div>
    </div>
  );
}

export default Menu;
