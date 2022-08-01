/* eslint-disable camelcase */
import React, { useContext, useState } from "react";
import ForcastWidjet from "./ForcastWidget";
import Button from "./Button";
import locationContext from "../context/locationContext";
import Modal from "./Modal";
import ChangeForm from "./ChangeForm";

interface IMenuProps{
  precip_in: number | undefined,
  humidity: number | undefined,
  wind_kph: number | undefined,
}
function Menu(props:IMenuProps) {
  const { precip_in, humidity, wind_kph } = props;
  const changeLocation = useContext(locationContext);
  const [activeModal, setActiveModal] = useState<string>("");
  const closeModal = () => {
    setActiveModal("");
  };
  const openModal = () => {
    setActiveModal("modal_active");
  };
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
        <ForcastWidjet />
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
