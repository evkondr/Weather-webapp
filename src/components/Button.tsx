/* eslint-disable react/require-default-props */
import React from "react";

interface IButton {
    children: React.ReactNode,
    clickHandler?: (e:React.MouseEvent<HTMLButtonElement>) => void;
}
function Button({ children, clickHandler }:IButton) {
  return <button type="button" className="button" onClick={clickHandler}>{children}</button>;
}
export default Button;
