import { useEffect, useState } from "react";

function Slider() {
  const [rightValue, setRightValue] = useState(0);
  const [leftValue, setLeftValue] = useState(1000);

  //useEffect(()=>onchange({rightValue}))

  return (
    <div className="slider">
      <input
        id="leftBullet"
        type="range"
        value={leftValue}
        onChange={(e)=> {
          if(Number(e.target.value) > rightValue){
            setLeftValue( Number(e.target.value))
          }}}        min="0"
        max="1000"
        className="bullet bullet--left"
      />
      <div className="bullet--line" />
      <input
        id="rightBullet"
        type="range"
        value={rightValue}
        min="0"
        max="1000"
        onChange={(e)=> {
          if(Number(e.target.value) > leftValue){
            setRightValue( Number(e.target.value))
          }}}
        className="bullet bullet--left"
      />
      <p className="nums">{`${leftValue}     ${rightValue}`}</p>
    </div>
  );
}

export default Slider;
