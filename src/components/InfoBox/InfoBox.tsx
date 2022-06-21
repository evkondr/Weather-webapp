import React, { useState, useEffect } from "react";
import API from "../../API/api";

interface IWeather{
    [propName: string]: any;
}
function InfoBox() {
  const [weather, setWeather] = useState<string | IWeather>("");
  useEffect(() => {
    try {
      const data = API.get();
      setWeather(data);
      console.log(weather);
    } catch (e:any) {
      console.log(e.message);
    }
  }, []);
  return (
    <div className="wrap">
      <p>Info</p>
    </div>
  );
}

export default InfoBox;
