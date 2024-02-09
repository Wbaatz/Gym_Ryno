import React from 'react'
import  {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@mui/material';

//this is now acting as a wrapper.
const Root = () => {
 
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <main >
        <Outlet/>
        </main>
        <Footer/>
        </Box>
  );
}

export default Root