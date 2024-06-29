
 import './Cards.css';
 import '../App.css';
import React from 'react'
import {Link} from 'react-router-dom';
import '../Components/Cards.css'
import {Stack,typography,Box, Typography} from '@mui/material';
const Cards = ({exercise}) => {
  return (










<Link  className="core-concepts"  to={`/ExcerciseDetail/${exercise.id}`}>
 <Box
          component="img"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          sx={{
            zIndex: 1,
            width: { xs: '100%', lg: '100%' },
          
          }}
        />
<Stack direction="row" fontSize={5}  justifyContent={'start'} sx={{
            gap: { xs: 2, lg:1 }, position:'relative',top:'-69%',zIndex:'1'
          }}>
    <button className='btngo'>
    {exercise.bodyPart}
    </button>
    <button className="btn2" >
    {exercise.target}
    </button>


</Stack>
<Typography  color="white" fontWeight="bold" textAlign={'center'}  sx={{
         
            textTransform: "capitalize",
            fontSize: { xs: 15, lg: 30 },
            mb: { xs: 10 },
           
          }}>
    {exercise.name}
</Typography>


</Link>


  );
};

export default Cards



