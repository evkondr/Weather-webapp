import React from "react";
import InfoBox from "./InfoBox/InfoBox";

function App() {
  return (
    <div className="wrap">
      <div className="weather-widget">
        <div className="city-search">
          <input type="text" />
          <InfoBox />
        </div>
      </div>
    </div>
  );
}

export default App;
