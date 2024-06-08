import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import bg from '../Assets/footer_bg.png';
import logo from '../Assets/icon rynopng.png'
const Footer = () => {
  return (
    <Box
      mt="80px"
      sx={{
        backgroundImage: `url(${bg})`,  // use string template to set background image
        backgroundSize: 'cover',  // ensures the image covers the entire box
        backgroundPosition: 'center',  // centers the image
        width: '100%',  // adjust the width as needed
        height: '400px',  // adjust the height as needed
      }}
    >
     <Stack gap="40px" alignItems="center" px="40px" pt="24px">
   <img src={logo} alt="logo" width="200px" height="40px" style={{position:'relative',top:'100px'}}/>








   <Typography variant='h2' fontWeight={900} fontStyle={'italic'} color={'#DADADA'} pb="40px" mt="80px">
    Make the Sweat easy!
   </Typography>
     </Stack>


     <Stack direction={'row'} justifyContent={'space-around'} mt={7}>
     <Typography fontFamily={'math'} variant='h5' fontWeight={900}   color={'#DADADA'}  >
   Follow us on Social Media
   </Typography>
   <Typography fontFamily={'math'} variant='h5' fontWeight={900}   color={'#DADADA'} >
    CopyRight C 2024 All Rights Reserved
   </Typography>
   <Typography fontFamily={'math'} variant='h5' fontWeight={900}   color={'#DADADA'} >
   Privacy Policy Terms & Conditions
   </Typography>
     </Stack>
      </Box>
  )
}

export default Footer