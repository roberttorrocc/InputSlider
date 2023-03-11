import { useEffect, useState } from "react";
import { getWidthRange, getMarginRange } from "../utils/utilsFunctions";

function NormalSlider() {
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
      <p className="numberSlice">{`${leftValue}`}</p>

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
      <p className="numberSlice">{`${rightValue}`}</p>
    </div>
  );
}

export default NormalSlider;
