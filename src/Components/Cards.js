
 import './Cards.css';
 import '../App.css';
import React from 'react'
import {Link} from 'react-router-dom';
import '../Components/Cards.css'
import {Stack,typography,Box, Typography} from '@mui/material';
const Cards = ({exercise}) => {
  return (




// position: absolute;
// width: 450px;
// height: 505px;
// left: 179px;
// top: 303px;

// background: #010101;






<Link className="core-concepts"  to={`/ExcerciseDetail/${exercise.id}`}>
 <Box
          component="img"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          sx={{
            zIndex: 1,
            width: { xs: '100%', lg: 'auto' },
            height: { xs: '100px', lg: 'auto' },
          }}
        />
<Stack direction="row" fontSize={15} position={'relative'} justifyContent={'center'} sx={{
            top: { xs: 0, lg: -20 },
            gap: { xs: 2, lg: 10 },
          }}>
    <button className='btn'>
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



