import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import boxes from '../Assets/boxes.png';
const SimilarExercises = ({TargetMuscleExercises,equipmentExercises}) => {
  return (
    <Box xs={{mt:{lg:'100px', xs:'0'}}}>

<Typography fontStyle={'italic'} fontWeight={900} sx={{fontSize:{lg:'44px',xs:'16px'}}}  ><img height={70} style={{position:'relative',left:'30px',zIndex:'-1',top:'-10px'}} src={boxes}/> Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Target Muscle</span> Exercises</Typography>

<Box sx={{ position: "relative", width: "100%" }}>
         {TargetMuscleExercises.length ? <HorizontalScrollbar data={TargetMuscleExercises}/>:<Loader/>}
      </Box>
      <Typography fontStyle={'italic'} fontWeight={900} sx={{fontSize:{lg:'44px',xs:'16px'}}}  ><img height={70} style={{position:'relative',left:'30px',zIndex:'-1',top:'-10px'}} src={boxes}/> Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Equipment</span> Exercises</Typography>
      <Box sx={{ position: "relative", width: "100%" }}>
         {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>:<Loader/>}
      </Box>
      </Box>
  )
}

export default SimilarExercises