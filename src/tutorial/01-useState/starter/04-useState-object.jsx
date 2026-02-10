import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'coding'
  })

  // const [name,setName] = useState('Peter')
  // const [age,setAge] = useState(24)
  // const [hobby,setHobby] = useState('Coding')

  const displayPerson = () => {
    setPerson({name:'John',age:28,hobby:'Screaming at the computer'})
  }
  const {name,age,hobby} = person
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>Enjoys {hobby}</h3>
    <button className='btn' type='button' onClick={displayPerson} >Show John</button>
  </>
};

export default UseStateObject;
