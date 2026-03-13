import React, { createContext } from 'react'
import Usercontainer from './Usercontainer';

export const NavlinksContext = createContext()
const Navlinks = () => {
    return (
        <NavlinksContext.Provider value={{user:'name'}}>
            <div className='nav-container'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><Usercontainer /></li>
                </ul>
            </div>
        </NavlinksContext.Provider>
    )
}

export default Navlinks