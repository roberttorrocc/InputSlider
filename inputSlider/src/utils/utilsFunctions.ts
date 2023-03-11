  //el 1000 se tiene que cambiar por el max si este se modifica
export function getWidthRange(rightValue:number,leftValue:number) {
    return ((rightValue-leftValue)/1000*100*2);
  }
export function getMarginRange(leftValue:number) {
    return ( leftValue/1000*100*2 +3);
  }

