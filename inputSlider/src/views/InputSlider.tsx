import { useEffect, useState } from "react";
import { getWidthRange, getMarginRange } from "../utils/utilsFunctions";

function InputSlider() {
  const [rightInputValue, setRightInputValue] = useState(1000);
  const [leftInputValue, setLeftInputValue] = useState(0);
  const [rightValue, setRightValue] = useState(1000);
  const [leftValue, setLeftValue] = useState(0);
  const [draggingLeft, setDraggingLeft] = useState(false);
  const [draggingRight, setDraggingRight] = useState(false);

  const handleMouseDownLeft = () => {
    setDraggingLeft(true);
  };

  const handleMouseDownRight = () => {
    setDraggingRight(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggingLeft) {
        const newValue = leftValue + e.offsetX;
        console.log("leftValue:" + leftValue);
        console.log("clientx: " + e.clientX);
        console.log("ofsetx: " + e.offsetX);
        if (newValue >= 0 && newValue < rightValue) {
          setLeftValue(newValue);
        }
      }
      if (draggingRight) {
        const newValue = rightValue + e.offsetX;
        if (newValue > leftValue && newValue <= 1000) {
          setRightValue(newValue);
        }
      }
    };
    const handleMouseUp = () => {
      setDraggingLeft(false);
      setDraggingRight(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingLeft, draggingRight, leftValue, rightValue]);

  return (
    <div className="slider">
      <div className="divTrSlice">
        <button
          onMouseDown={handleMouseDownLeft}
          className="bullet bullet--left"
          style={{ marginLeft: getMarginRange(leftValue) }}
        >
          x
        </button>
        <div className="bullet--line" />
        <div
          style={{
            width: getWidthRange(rightValue, leftValue),
            marginLeft: getMarginRange(leftValue),
          }}
          className="bullet--line2"
        />
        <button
          onMouseDown={handleMouseDownRight}
          className="bullet bullet--right"
          style={{ marginLeft: getMarginRange(rightValue) }}
        >
          x
        </button>
      </div>

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
