import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <div>
      <button className="btn" onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle && <RandomComponent/>}
    </div>
  )
};

const RandomComponent = () => {
  useEffect(()=>{
    const sumFunc = () =>{

    }
    window.addEventListener('scroll',sumFunc)
    return ()=> window.removeEventListener('scroll',sumFunc)
  },[])

  return <h1>Hello There</h1>
}

export default CleanupFunction;
