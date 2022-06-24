import React, { useState, useEffect } from "react";
import axios from "axios";
// import style from "style.css";
import API from "../../API/api";
import { IWeather } from "../../interfaces";

type error = {
  message: string
}

function InfoBox() {
  const [weather, setWeather] = useState<null | IWeather>(null);
  const fetchCurrentWeather = async () => {
    try {
      const data = await API.get();
      setWeather(data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("error message: ", err.message);
        return;
      }
      console.log("Unexpected error", err);
    }
  };
  useEffect(():void => {
    fetchCurrentWeather();
  }, []);
  return (
    <div className="">
      <p>test</p>
    </div>
  );
}

export default InfoBox;
