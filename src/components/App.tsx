import React from "react";
import Card from "./Card";
import Menu from "./MenuComponent";

function App() {
  return (
    <div className="wrap">
      <div className="weather-widget">
        <Card />
        <Menu />
      </div>
    </div>
  );
}

export default App;
