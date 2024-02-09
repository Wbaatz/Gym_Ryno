
//rafce
//to show use whether they led to the currently active page or not,react-router-dom has an alternative to the link component.
//the Navlink is used.it works just like a link. but has a special feature in it.

import React from 'react'

import  './Navbar.css'
import logo from '../Assets/Ryno_logo.png'
import { NavLink } from 'react-router-dom'
import {Stack} from '@mui/material';
const Navbar = () => {
  return (
  <Stack  direction="row" alignItems="center" justifyContent="none" sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'-10px',xs:'20px'}}}>
      <NavLink to="/"><img src={logo} alt="logo" style={{width:'130px',height:'130px',margin:'0 20px'}} /></NavLink>
 
    {/* <div className='header'> */}
    <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" className='list'>
      {/* <nav className='list'> */}

   
           <NavLink to="/"  className={({isActive})=>isActive ? 'active' :undefined} end>Home</NavLink>
           <NavLink  to="/ExcerciseDetail/0001"  className={({isActive})=>isActive ? 'active' :undefined}>Excercises</NavLink>
        <NavLink  to="/About"  className={({isActive})=>isActive ? 'active' :undefined}>About us</NavLink>

        {/* </nav> */}
    </Stack>
    {/* </div> */}
  </Stack>
  )
}

export default Navbar