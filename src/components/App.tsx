import React, { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import Menu from "./MenuComponent";
import useFetch from "../hooks/useFetch";
import appService from "../API/appSetvice";
import { IWeather } from "../interfaces";
import locationContext from "../context/locationContext";

function App() {
  const [currentWeather, setCurrentWeather] = useState<null | IWeather>(null);
  const [location, setLocation] = useState<string>("Москва");
  const [error, isLoading, fetchData] = useFetch(async () => {
    const response = await appService.getWeather({ lang: "ru", q: location, day: 5 });
    setCurrentWeather(response);
  });
  const changeLocation = useCallback((loc:string) => {
    setLocation(loc);
  }, []);
  useEffect(() => {
    fetchData();
  }, [location]);
  return (
    <div className="wrap">
      <div className="weather-widget">
        <locationContext.Provider value={changeLocation}>
          <Card weather={currentWeather} />
          <Menu
            precip_in={currentWeather?.current.precip_in}
            humidity={currentWeather?.current.humidity}
            wind_kph={currentWeather?.current.wind_kph}
          />
        </locationContext.Provider>
      </div>
    </div>
  );
}

export default App;
