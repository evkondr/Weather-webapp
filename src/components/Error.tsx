import React from "react";

function Error(props:{message: string}) {
  const { message } = props;
  return (
    <div className="error">
      <p className="error__message">
        Ошибка:
        {" "}
        {message}
      </p>
    </div>
  );
}
export default Error;
