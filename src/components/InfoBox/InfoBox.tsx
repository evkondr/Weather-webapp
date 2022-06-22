import React, { useState, useEffect } from "react";
import API from "../../API/api";
import { IWeather } from "../../interfaces";

function InfoBox() {
  const [weather, setWeather] = useState<null | IWeather>(null);
  const fetchCurrentWeather = async () => {
    try {
      const data = await API.get();
      setWeather(data);
    } catch (e:any) {
      console.log(e.message);
    }
  };
  useEffect(():void => {
    fetchCurrentWeather();
    console.log(weather);
  }, []);
  return (
    <div className="wrap">
      <p>Info</p>
    </div>
  );
}

export default InfoBox;
