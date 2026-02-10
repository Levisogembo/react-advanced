import { use } from "react";
import { useState } from "react";

const UseStateBasics = () => {
  const [count,setCount] = useState(0)
  
  const handleClick = () =>{
    setCount(count+1)
  }

  const decrease = () => {
    setCount(count-1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <div><button type="button" className="btn" onClick={handleClick}>Click Me</button></div>
      <div><button type="button" className="btn" onClick={decrease}>Decrease</button></div>
      <button type="button" className="btn" onClick={reset}>Reset</button>
    </div>
  )
};

export default UseStateBasics;
