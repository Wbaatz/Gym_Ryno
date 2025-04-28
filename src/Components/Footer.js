import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import bg from '../Assets/footer_bg.png';
import logo from '../Assets/icon rynopng.png'
const Footer = () => {
  return (
    <Box
      mt="40px"
      sx={{
        backgroundColor:{xs:'#140d0d',lg:''},
        backgroundImage: {xs:'',lg:`url(${bg})`},  // use string template to set background image
        backgroundSize: 'cover',  // ensures the image covers the entire box
        backgroundPosition: 'center',  // centers the image
        width: '-webkit-fill-available',  // adjust the width as needed
         // adjust the height as needed
      }}
    >
     <Stack gap="40px" alignItems="center" px="40px" pt="24px">
     <Box
      component="img"
      src={logo}
      alt="logo"
      sx={{
        width: '50%',
        height: 'auto',
        position: 'relative',
        top: {xs:'50px',lg:'100px'}
      }}
    />








   <Typography  sx={{
    fontSize:{xs:'25px',lg:'60px'},
    fontWeight: {
      xs: 700, // Different font weight for extra small devices
      lg: 900 // Different font weight for large devices
    },
    fontStyle: {
      xs: 'normal', // Different font style for extra small devices
      lg: 'italic' // Different font style for large devices
    },
    color: {
      xs: '#B0B0B0', // Different color for extra small devices
      lg: '#DADADA' // Different color for large devices
    },
    pb: {
      xs: '40px', // Different padding-bottom for extra small devices
      lg: '40px' // Different padding-bottom for large devices
    },
    mt: {
      xs: '30px', // Different margin-top for extra small devices
      lg: '80px' // Different margin-top for large devices
    }
  }}>
    Make the Sweat easy!
   </Typography>
     </Stack>


     <Stack direction={'row'} sx={{textAlign:{xs:'center'},gap:{xs:'10px'},pb:{xs:'20px'}}} justifyContent={'space-around'}  >
     <Typography fontFamily={'math'} sx={{ fontSize:{xs:'10px',lg:'20px'}}} fontWeight={900}   color={'#DADADA'}  >
   Follow us on Social Media
   </Typography>
   <Typography fontFamily={'math'} sx={{ fontSize:{xs:'10px',lg:'20px'}}} fontWeight={900}   color={'#DADADA'} >
    CopyRight C 2024 All Rights Reserved
   </Typography>
   <Typography fontFamily={'math'} sx={{ fontSize:{xs:'10px',lg:'20px'}}} fontWeight={900}   color={'#DADADA'} >
   Privacy Policy Terms & Conditions
   </Typography>
     </Stack>
      </Box>
  )
}

export default Footer