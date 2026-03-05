import { data } from "../../../data";
import {useState} from 'react'
const UserChallenge = () => {

  const [people,setPeople] = useState(data)
  const [name,setName] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!name) return
    const fakeID = Date.now()
    const newUser = {id:fakeID, name}
    const updatedUsers = [...people,newUser]
    setPeople(updatedUsers)
    setName('') 
   // console.log(fakeID);
    
  }

  const removeUser = (id) =>{
    const newUsers = people.filter((user)=>user.id !== id)
    setPeople(newUsers)
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h2>Users</h2>
      <div>{people.map((person)=>{
        return <div key={person.id}>
          <p >Name: {person.name}</p>
          <button className="btn" onClick={()=>removeUser(person.id)}>Remove</button>
          </div>
      })}</div>
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
