import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../../API/api";
import { IWeather } from "../../interfaces";

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
    <div className="info-box">
      <p>test</p>
    </div>
  );
}

export default InfoBox;
