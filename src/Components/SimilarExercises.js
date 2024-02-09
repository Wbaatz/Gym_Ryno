import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
const SimilarExercises = ({TargetMuscleExercises,equipmentExercises}) => {
  return (
    <Box xs={{mt:{lg:'100px', xs:'0'}}}>
       <Typography variant="h4" mb="5px">
      Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Target Muscle</span> Exercises
    </Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
         {TargetMuscleExercises.length ? <HorizontalScrollbar data={TargetMuscleExercises}/>:<Loader/>}
      </Stack>
      <Typography variant="h4" mb="5px">
      Similar <span style={{color:'#ff2625',textTransform:'capitalize'}}>Equipment</span> Exercises
    </Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
         {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>:<Loader/>}
      </Stack>
      </Box>
  )
}

export default SimilarExercises