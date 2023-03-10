import { useEffect, useState } from "react";
import { getWidthRange, getMarginRange } from "../utils/utilsFunctions";

function NormalSlider() {
  const [rightValue, setRightValue] = useState(1000);
  const [leftValue, setLeftValue] = useState(0);

  return (
    <div className="slider">
      <table >
        <tr >
          <td >{`${leftValue}`}</td>
          <td >
            <input
              title="leftBullet"
              type="range"
              value={leftValue}
              onChange={(e) => {
                if (Number(e.target.value) < rightValue) {
                  setLeftValue(Number(e.target.value));
                } else {
                  setLeftValue(rightValue - 1);
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
                } else {
                  setRightValue(leftValue + 1);
                }
              }}
              className="bullet bullet--left"
            />
          </td>

          <td >{`${rightValue}`}</td>
        </tr>
      </table>
    </div>
  );
}

export default NormalSlider;