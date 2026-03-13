
import React, { createContext, useState } from 'react'
import Navlinks from '../Navlinks'

export const NavbarContext = createContext()


const Navbar = () => {
  const [user, setUser] = useState({ name: 'Levi' })

  const logout = () => setUser(null)
  return (
    <NavbarContext.Provider value={{user,logout}}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar