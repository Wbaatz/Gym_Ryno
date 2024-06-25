
//rafce
//to show use whether they led to the currently active page or not,react-router-dom has an alternative to the link component.
//the Navlink is used.it works just like a link. but has a special feature in it.

import React from 'react'
import { Box } from '@mui/material';
import  './Navbar.css'
import logo from '../Assets/icon rynopng.png'
import { NavLink } from 'react-router-dom'
import {Stack} from '@mui/material';
import { red } from '@mui/material/colors';
const Navbar = () => {
  return (
  <Stack bgcolor={'rgba(7, 7, 7, 0.46)'} width="100%" direction="row" alignItems="center" justifyContent="space-between"  sx={{gap:{},mt:{xs:'0px',xl:'20px'}, mr: {
  
   
  }}}>
      <NavLink to="/">
      <Box
  component="img"
  src={logo}
  alt="logo"
  sx={{
    width: { xs: '70px', sm: '100px', md: '150px', lg: '200px', xl: '220px' },
    height: 'auto',
    margin: {
      xs: '10px',
      sm: '30px',
      md: '40px',
      lg: '50px',
      xl: '60px'
    }
  }}
/>

    </NavLink>
 
    {/* <div className='header'> */}
    <Stack
      direction="row"
      alignItems={"center"}
      sx={{
        gap: {
          xs: '60px', // Extra-small screens
          sm: '60px',
          lg: '120px',
            // Small screens
        },
        mr:{xs:'30px',sm:'50px',md:'360px'} , // Margin right with unit
        
      
      }}
      
      className='list'
    >
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