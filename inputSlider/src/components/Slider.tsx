import { useEffect, useState } from "react";
import Bullet from "./Bullet";
import Line from "./Line";

function SliderNo() {
  return (
    <div className="slider">
      <Bullet name="right" />
      <Line />
      <Bullet name="left"></Bullet>
    </div>
  );
}
function Slider() {
  const [rightValue, setRightValue] = useState(0);
  const [leftValue, setLeftValue] = useState(1000);

  //useEffect(()=>onchange({rightValue}))

  return (
    <div className="slider">
      <input
        id="rightBullet"
        type="range"
        value={rightValue}
        onChange={(e)=>setRightValue( Number(e.target.value))}
        min="0"
        max="1000"
        className="bullet bullet--right"
      />
      <div className="bullet--line" />
      <input
        id="leftBullet"
        type="range"
        value={leftValue}
        min="0"
        max="1000"
        onChange={(e)=>setLeftValue( Number(e.target.value))}
        className="bullet bullet--left"
      />
      <p className="nums">{`${rightValue}     ${leftValue}`}</p>
    </div>
  );
}

export default Slider;
