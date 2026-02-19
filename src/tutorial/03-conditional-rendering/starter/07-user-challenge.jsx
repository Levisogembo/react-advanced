import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ name: 'Levi' })
  }

  const logout = () => {
    setUser(null)
  }

  return <>
    <h2>user challenge</h2>
    <div>
      {user ? 
      <UserLogged name={user.name} logout={logout}/>  : 
      <div>
      <button className="btn" onClick={login}>Login</button>
      </div>
      }
    </div>
  </>
};

const UserLogged = (user) => {
  return <div>
  <h4>Hello there {user.name}</h4>
  <button className="btn" onClick={user.logout}>Logout</button>
</div>
}
export default UserChallenge;
