import { useEffect, useState } from "react";

function InputSlider() {
  const [rightValue, setRightValue] = useState(1000);
  const [leftValue, setLeftValue] = useState(0);

  //useEffect(()=>onchange({rightValue}))

  return (
    <div className="slider">
      <input
        title="leftBullet"
        type="range"
        value={leftValue}
        onChange={(e) => {
          if (Number(e.target.value) < rightValue) {
            setLeftValue(Number(e.target.value));
          }else{
            setLeftValue(rightValue-1);
          }
        }}
        min="0"
        max="1000"
        className="bullet bullet--left"
      />
      <div className="bullet--line" />
      <input
        title="rightBullet"
        type="range"
        value={rightValue}
        min="0"
        max="1000"
        onChange={(e) => {
          if (Number(e.target.value) > leftValue) {
            setRightValue(Number(e.target.value));
          }else{setRightValue(leftValue+1)}
        }}
        className="bullet bullet--left"
      />
      <p className="nums">{`${leftValue}  asdas   ${rightValue}`}</p>
    </div>
  );
}

export default InputSlider;