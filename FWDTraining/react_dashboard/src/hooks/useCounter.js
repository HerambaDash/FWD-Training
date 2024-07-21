import { useState, useEffect } from "react";

function useCounter() {
  const [ counter, setCounter ] = useState(1);
  const [ bgColor, setBgColor ] = useState("green");

  useEffect(() => {
    if( bgColor === "green") {
      setBgColor("red");
    } else {
      setBgColor("green");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);


  return { counter, setCounter, bgColor }
}

export default useCounter;