import { useState } from "react";

const UseStateGotcha = () => {
  const [value,setValue] = useState(0)
  const handleClick = () => {
    setTimeout(()=>{
      setValue((currentState)=>{
        return currentState + 1
      })
    },3000)
  }
  return <div>
    <h1>useState "gotcha"</h1>
    <p>{value}</p>
    <button type="button" className="btn" onClick={handleClick}>Increase</button>
  </div>;
};

export default UseStateGotcha;
