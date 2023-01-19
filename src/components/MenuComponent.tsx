/* eslint-disable camelcase */
import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import ForcastWidjet from "./ForcastWidget";
import Button from "./Button";
import appContext from "../context/appContext";
import Modal from "./Modal";
import ChangeForm from "./ChangeForm";
import { IForecastDay } from "../interfaces";
import getCurrentDate from "../API/getCurrentDate";

interface IMenuProps{
  precip_in: number | undefined,
  humidity: number | undefined,
  wind_kph: number | undefined,
  forecastday: IForecastDay[] | undefined
}
function Menu(props:IMenuProps) {
  const {
    precip_in, humidity, wind_kph, forecastday,
  } = props;
  const changeLocation = useContext(appContext);
  const [activeModal, setActiveModal] = useState<string>("");
  const closeModal = () => {
    setActiveModal("");
  };
  const openModal = () => {
    setActiveModal("modal_active");
  };
  console.log(forecastday);
  return (
    <div className="menu">
      <div className="menu-container">
        {/* Details block */}
        <div className="details">
          <ul className="details__list">
            <li className="details__item">
              <span>PRECIPITATION</span>
              <span>
                {precip_in}
                {" "}
                %
              </span>
            </li>
            <li className="details__item">
              <span>HUMIDITY</span>
              <span>
                {humidity}
                {" "}
                %
              </span>
            </li>
            <li className="details__item">
              <span>WIND</span>
              <span>
                {wind_kph}
                {" "}
                km/h
              </span>
            </li>
          </ul>
        </div>
        {/* Forcast block */}
        <div className="forcast-widjet">
          {forecastday?.map((item, index) => (
            <ForcastWidjet
              key={v4()}
              day={item.day}
              dayWeek={getCurrentDate(index + 1).dayOfWeek.substring(0, 3)}
            />
          ))}
        </div>
        {/* Change location block */}
        <div className="change">
          <Button clickHandler={() => { openModal(); }}>Change location</Button>
          <Modal classActive={activeModal}>
            <ChangeForm closeModal={closeModal} changeLocation={changeLocation} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Menu;
