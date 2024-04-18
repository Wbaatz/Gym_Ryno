import React from 'react'
import body_img from '../Assets/body.png'
import {Box,Stack,Typography,Button} from '@mui/material'
import './HeroBanner.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const HeroBanner = () => {
  return (
      <Box sx={{mt: 
   {lg:'212px',xs:'70px'},
   ml:{sm:'50px'},
   
   }} position="relative" p="20px">
    <Typography color="#0084c0" fontWeight="633" fontSize="32px">
        Fitness Club
    </Typography>
    <Typography mb="23px" mt="30px" fontWeight="700" sx={{fontSize:{lg:'44px',xs:'40px'}}}>
        Sweat, Smile <br/> And Repeat
    </Typography>
    <Typography fontSize="22px" mb={4} lineHeight="35px" >
      Check out the most effective Excercises
    </Typography>
    <Button variant='contained' href="#exercises">Explore Excercises</Button>
    <Typography fontSize="200px" fontWeight={600} color="#ff2625" sx={{opacity:0.1,display:{lg:'block',xs:'none'}}}>
      Excercise
    </Typography>
    <img src={body_img} className='muscle'></img>



    
   </Box>
      
      

   
  )
}

export default HeroBanner