import React from "react";
import Button from "./Button";

interface IChangeFormProps{
  closeModal: () => void
}
function ChangeForm(props:IChangeFormProps) {
  const { closeModal } = props;
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
      <input type="text" placeholder="" id="location" />
      <Button>Сменить</Button>
    </form>
  );
}
export default ChangeForm;
