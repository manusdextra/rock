import React from "react";
import Button from "./Button";

function Buttons({ choices, onClick }) {
  return (
    <div
      id="buttons"
      className="
        col-start-2 row-start-3 
        flex flex-col
        place-content-center 
        gap-2 py-2
        text-3xl
    "
    >
      {choices.map((choice, index) => (
        <Button choice={choice} key={index} onClick={onClick} />
      ))}
    </div>
  );
}

export default Buttons;
