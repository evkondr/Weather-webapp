import React, { Children } from "react";

interface IModalProps{
    children: React.ReactNode,
    classActive: string,
}
function Modal(props:IModalProps) {
  const { children, classActive } = props;
  return (
    <div className={`modal ${classActive}`}>
      <div className="modal__container">
        {children}
      </div>
    </div>
  );
}
export default Modal;
