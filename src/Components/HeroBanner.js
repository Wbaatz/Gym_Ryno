import React from 'react'
import body_img from '../Assets/bodyguy.png'
import {Box,Stack,Typography,Button} from '@mui/material'
import './HeroBanner.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const HeroBanner = () => {
  return (
      <Box sx={{mt: 
   {lg:'212px',xs:'70px'},
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



    <Typography color="#61FFE9" fontStyle={'italic'} fontWeight="800" fontSize="48px" lineHeight="116px">
        FITNESS CLUB
    </Typography>
    <Typography  color="#FFFFFF" fontStyle={'italic'} fontWeight="800" sx={{fontSize:{lg:'80px',xs:'40px'}}}>
       SWEAT, SMILE <br/> AND REPEAT
    </Typography>


   




{/* position: absolute;
width: 651px;
height: 94px;
left: 15px;
top: 730px;

font-family: 'Inter';
font-style: italic;
font-weight: 800;
font-size: 32px;
line-height: 39px;

color: rgba(147, 147, 151, 0.75);
 */}



    <Typography color={'rgba(147, 147, 151, 0.75)'} fontSize="32px" mb={4} fontWeight={800} fontStyle={'italic'} lineHeight="35px" >
      Check out the most effective Excercises
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


    <Button  variant='contained' sx={{borderRadius:'50px',background:'#61FFE9',fontStyle:'italic',fontWeight:'1000',fontSize:'20px',color:'black',padding:'20px 30px 20px 30px', '&:hover': {
      background: '#DF424D',color:'white'
    },}}  href="#exercises" 
      >Explore Excercises</Button>
    
    {/* <img src={body_img} className='muscle'></img> */}



    
   </Box>
      
      

   
  )
}

export default HeroBanner