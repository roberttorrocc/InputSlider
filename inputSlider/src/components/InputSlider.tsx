import { useEffect, useState } from "react";
import { getWidthRange, getMarginRange } from "../utils/utilsFunctions";

function InputSlider() {
  const [rightValue, setRightValue] = useState(1000);
  const [leftValue, setLeftValue] = useState(0);
  const [rightInputValue, setRightInputValue] = useState(1000);
  const [leftInputValue, setLeftInputValue] = useState(0);

  return (
    <div className="slider">
      <input
        title="leftBullet"
        type="range"
        value={leftValue}
        onChange={(e) => {
          if (Number(e.target.value) < rightValue) {
            setLeftValue(Number(e.target.value));
            setLeftInputValue(Number(e.target.value));
          } else {
            setLeftValue(rightValue - 1);
            setLeftInputValue(rightValue - 1);
          }
        }}
        min="0"
        max="1000"
        className="bullet bullet--left"
      />
      <div className="bullet--line" />
      <div
        style={{
          width: getWidthRange(rightValue, leftValue),
          marginLeft: getMarginRange(leftValue),
        }}
        className="bullet--line2"
      />
      <input
        title="rightBullet"
        type="range"
        value={rightValue}
        min="0"
        max="1000"
        onChange={(e) => {
          if (Number(e.target.value) > leftValue) {
            setRightValue(Number(e.target.value));
            setRightInputValue(Number(e.target.value));
          } else {
            setRightValue(leftValue + 1);
            setRightInputValue(leftValue + 1);
          }
        }}
        className="bullet bullet--left"
      />

      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (leftInputValue < 0) {
            //el 0 es el min se tiene que cambiar si se modifica el min
            setLeftValue(0);
            setLeftInputValue(0);
          } else if (leftInputValue < rightValue) {
            setLeftValue(leftInputValue);
          } else {
            setLeftValue(rightValue - 1);
            setLeftInputValue(rightInputValue - 1);
          }
        }}
      >
        <input
          type="text"
          name=""
          id=""
          value={leftInputValue}
          onChange={(e) => {
            setLeftInputValue(Number(e.target.value));
          }}
        />
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (rightInputValue > 1000) {
            //El 1000 es el max se tiene que cambiar si se modifica el max
            setRightValue(1000);
            setRightInputValue(1000);
          } else if (rightInputValue > leftValue) {
            setRightValue(rightInputValue);
          } else {
            setRightValue(leftValue + 1);
            setRightInputValue(leftValue + 1);
          }
        }}
      >
        <input
          type="text"
          name=""
          id=""
          value={rightInputValue}
          onChange={(e) => {
            setRightInputValue(Number(e.target.value));
          }}
        />
      </form>

    </div>
  );
}

export default InputSlider;
