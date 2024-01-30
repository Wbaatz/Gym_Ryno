import React,{useEffect,useState} from 'react'
import { Pagination } from '@mui/material/';
import {Box,Stack,Typography} from '@mui/material/'
import Cards from './Cards'
import { myResponse} from '../utils/FetchData'
const Excercises = ({SetExercises,exercises,bodyPart}) => {
  const [currentPage,setCurrentPage]=useState(1);
  const exercisesPerPage=9;

  const paginate=(e,value)=>{
setCurrentPage(value);

window.scrollTo({top:1800,behavior:'smooth'})
  }


  const indexOfLastExercise=currentPage*exercisesPerPage;
  const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;
  const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise)

useEffect(()=>{
  const fetchExerciseData= async ()=>{
    let exerciseData=[];
if(bodyPart ==='all'){
  exerciseData=(await myResponse('exercises')).data;
}
else{
  exerciseData=(await myResponse(`exercises/bodyPart/${bodyPart}`)).data;
}

SetExercises( exerciseData);
  }
   fetchExerciseData();
},[bodyPart]);

  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
     

     <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
     flexWrap="wrap" justifyContent="center">
    {currentExercises.map((exercise,index)=>(
      // <p>{exercise.name}</p>
      <Cards key={index} exercise={exercise}/>
    ))}
    
     </Stack>
     <Stack mt="100px" alignItems="center">
     {exercises.length>9 && (
      <Pagination 
      color="standard"
      shape="rounded"
      defaultPage={1}
      count={Math.ceil(exercises.length/exercisesPerPage)}
      page={currentPage}
      onChange={paginate}
      size="large"
      />
     )}


     </Stack>
      </Box>
  )
}

export default Excercises