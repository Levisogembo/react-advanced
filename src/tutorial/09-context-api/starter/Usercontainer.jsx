import React, { useContext } from 'react'
import { NavbarContext } from './prop drilling/Navbar'
import { NavlinksContext } from './Navlinks'

const Usercontainer = () => {
    //console.log(props);
    const { user, logout } =  useContext(NavbarContext)
    const tester = useContext(NavlinksContext)
    console.log(tester);
    
    return (
        <div className='user-container'>
            {user ? <div>
                <p>Hello there {user.name}</p>
                <button className='btn' onClick={logout}>Logout</button>
            </div> : <button className='btn' >Please Login</button>}
        </div>
    )
}

export default Usercontainer