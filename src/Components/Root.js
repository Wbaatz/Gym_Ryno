import React from 'react'
import  {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//this is now acting as a wrapper.
const Root = () => {
  const theme = createTheme({
    // Your theme configuration
  });
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <main >
        <ThemeProvider theme={theme}>
        <Outlet/>
        </ThemeProvider>
        </main>
        <Footer/>
        </Box>
  );
}

export default Root