
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
<img  src={exercise.gifUrl} style={{zIndex:'1'}} alt={exercise.name} loading="lazy"/>
<Stack direction="row" fontSize={15} position={'relative'} justifyContent={'center'} top={-20} gap={10}>
    <button className='btn'>
    {exercise.bodyPart}
    </button>
    <button className="btn2" >
    {exercise.target}
    </button>


</Stack>
<Typography  color="white" fontWeight="bold" textAlign={'center'} position={'relative'} top={-30}  textTransform="capitalize" fontSize="30px">
    {exercise.name}
</Typography>


</Link>


  );
};

export default Cards



