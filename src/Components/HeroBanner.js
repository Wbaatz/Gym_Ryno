import React from 'react'
import body_img from '../Assets/bodyguy.png'
import {Box,Stack,Typography,Button} from '@mui/material'
import './HeroBanner.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const HeroBanner = () => {
  return (
      <Box sx={{mt: 
   {lg:'212px',xs:'10px'},
   ml:{sm:'50px'},
   
   }} position="relative" p="20px">
    
   
   
{/* 
position: absolute;
width: 970px;
height: 301px;
left: 15px;
top: 485px;

font-family: 'Inter';
font-style: italic;
font-weight: 800;
font-size: 96px;
line-height: 116px;

color: #FFFFFF; */}



    <Typography color="#61FFE9" fontStyle={'italic'} fontWeight="800" sx={{fontSize:{xs:'20px',lg:'48px'},lineHeight:{xs:'50px',lg:'116px'}}} >
        FITNESS CLUB
    </Typography>
    <Typography  color="#FFFFFF" fontStyle={'italic'} fontWeight="800" sx={{fontSize:{lg:'80px',xs:'27px'}}}>
       SWEAT, SMILE <br/> AND REPEAT
    </Typography>


   







    <Typography
  sx={{
    color: 'rgba(147, 147, 151, 0.75)',
    fontSize: { xs: '12px', lg: '32px' },
    mb: { xs: 2, lg: 4 }, // Adjusted margin-bottom for responsive design
    fontWeight: { xs: 600, lg: 800 }, // Example of different fontWeight for responsiveness
    fontStyle: 'italic',
    lineHeight: { xs: '10px', lg: '35px' } // Adjusted lineHeight for responsive design
  }}
>
  Check out the most effective Exercises
</Typography>



    
{/* 





position: absolute;
width: 369px;
height: 38px;
left: 57px;
top: 952px;

font-family: 'Inter';
font-style: italic;
font-weight: 800;
font-size: 32px;
line-height: 39px;

color: #000000; */}


<Button
  variant="contained"
  sx={{
    borderRadius: { xs: '30px', lg: '50px' },
    background: { xs: '#61FFE9', lg: '#61FFE9' }, // background color can remain same if not changing
    fontStyle: 'italic',
    fontWeight: { xs: '700', lg: '1000' },
    fontSize: { xs: '10px', lg: '20px' },
    color: { xs: 'black', lg: 'black' }, // color can remain same if not changing
    padding: { xs: '5px 10px', lg: '20px 30px' },
    '&:hover': {
      background: { xs: '#DF424D', lg: '#DF424D' }, // hover background color can remain same if not changing
      color: { xs: 'white', lg: 'white' } // hover text color can remain same if not changing
    },
  }}
  href="#exercises"
>
  Explore Exercises
</Button>

    
    {/* <img src={body_img} className='muscle'></img> */}



    
   </Box>
      
      

   
  )
}

export default HeroBanner