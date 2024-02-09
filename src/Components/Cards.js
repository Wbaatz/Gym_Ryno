
 import './Cards.css';
 import '../App.css';
import React from 'react'
import {Link} from 'react-router-dom';
import '../Components/Cards.css'
import {Stack,typography,Box, Typography} from '@mui/material';
const Cards = ({exercise}) => {
  return (


<Link className="core-concepts"  to={`/ExcerciseDetail/${exercise.id}`}>
<img  src={exercise.gifUrl}  alt={exercise.name} loading="lazy"/>
<Stack direction="row">
    <button className='btn'>
    {exercise.bodyPart}
    </button>
    <button className="btn2" >
    {exercise.target}
    </button>


</Stack>
<Typography ml="21px" color="white" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="20px">
    {exercise.name}
</Typography>


</Link>


  );
};

export default Cards



