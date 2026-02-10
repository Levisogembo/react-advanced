import { data } from "../../../data";
import { useState } from "react";
const UseStateArray = () => {
  const [people,setPeople] = useState(data)
  const removePerson = (id) => {
    console.log(id);
    const newPeople = people.filter((item)=>item.id !== id)
    setPeople(newPeople)
  } 

  const clearList = () => {
    setPeople([])
  }
  return <>
    <h2>People</h2>
    <div>{people.map((item)=>{
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <button type="button" onClick={()=>removePerson(item.id)} className="btn">Remove</button>
        </div>
      )
    })}</div>
    <div><button type="button" className="btn" style={{margin: '2rem'}} onClick={clearList}>clearList</button></div>
    </>
};

export default UseStateArray;
