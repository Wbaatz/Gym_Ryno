import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import boxes from '../Assets/boxes.png';
const SimilarExercises = ({TargetMuscleExercises,equipmentExercises}) => {
  return (
    <Box xs={{mt:{lg:'100px', xs:'0'}}}>

<Typography fontStyle={'italic'} fontWeight={900} sx={{fontSize:{lg:'44px',xs:'30px'}}}  ><img height={70} style={{position:'relative',left:'30px',zIndex:'-1',top:'-10px'}} src={boxes}/> Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Target Muscle</span> Exercises</Typography>

      <Stack direction="row" sx={{p:'2',position:'relative'}}>
         {TargetMuscleExercises.length ? <HorizontalScrollbar data={TargetMuscleExercises}/>:<Loader/>}
      </Stack>
      <Typography fontStyle={'italic'} fontWeight={900} sx={{fontSize:{lg:'44px',xs:'30px'}}}  ><img height={70} style={{position:'relative',left:'30px',zIndex:'-1',top:'-10px'}} src={boxes}/> Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Equipment</span> Exercises</Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
         {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>:<Loader/>}
      </Stack>
      </Box>
  )
}

export default SimilarExercises