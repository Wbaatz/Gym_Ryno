import React from 'react'
import {Box,Stack,Typography} from '@mui/material';

import logo from '../Assets/body.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="gray">
     <Stack gap="40px" alignItems="center" px="40px" pt="24px">
   <img src={logo} alt="logo" width="200px" height="40px"/>
   <Typography variant='h5' pb="40px" mt="20px">
    Make the Sweat easy!
   </Typography>
     </Stack>
      </Box>
  )
}

export default Footer