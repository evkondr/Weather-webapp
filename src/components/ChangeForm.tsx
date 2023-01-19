import React, { useState } from "react";
import Button from "./Button";

interface IChangeFormProps{
  closeModal: () => void,
  changeLocation: (location:string) => void
}
function ChangeForm(props:IChangeFormProps) {
  const [location, setLocation] = useState<string>("");
  const { closeModal, changeLocation } = props;
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const onClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeLocation(location);
    closeModal();
    setLocation("");
  };
  return (
    <form className="location-form" action="">
      <div
        className="location__form-close"
        role="button"
        tabIndex={0}
        onClick={() => closeModal()}
        onKeyDown={() => closeModal()}
        aria-label="close"
      />
      <h5>Введите город</h5>
      <input
        type="text"
        placeholder=""
        id="location"
        value={location}
        onChange={onChangeHandler}
      />
      <Button clickHandler={onClickHandler}>Сменить</Button>
    </form>
  );
}
export default ChangeForm;
