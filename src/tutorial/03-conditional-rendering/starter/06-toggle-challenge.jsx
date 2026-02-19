import { useState } from "react";

const ToggleChallenge = () => {
  const [isToggle,setToggle] = useState(true)

  const handleToggle = () => {
    console.log(isToggle);
    
    setToggle(!isToggle)
  }
  return (
    <div>
      <button className="btn" onClick={handleToggle}>Toggle</button>
      {isToggle ? <Alert/> : <p>Fail btn</p>}
    </div>
  )
};

const Alert = () => {
  return <div className="alert alert-danger">Hello World</div>
}
export default ToggleChallenge;
