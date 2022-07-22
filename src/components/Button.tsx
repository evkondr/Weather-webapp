import React from "react";

interface IButton{
    children: React.ReactNode
}
function Button({ children }:IButton) {
  return <button type="button">{children}</button>;
}
export default Button;
