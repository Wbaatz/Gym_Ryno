import React,{useEffect,useState} from 'react'
import { Pagination } from '@mui/material/';
import { styled } from '@mui/material/styles';
import {Box,Stack,Typography} from '@mui/material/'
import Cards from './Cards'
import boxes from '../Assets/boxes.png'
import { myResponse} from '../utils/FetchData'

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: 'black',  // lighter red color for non-selected items
  },
 '& .MuiPaginationItem-root.Mui-selected': {
    backgroundColor: '#7e2c25',  // dark red color for selected item
    color: '#ffffff',  // white color for selected item text
  },
  '& .MuiPaginationItem-page:hover': {
    backgroundColor: '#f4d2d0',  // light red color on hover for non-selected items
  },
  '& .MuiPaginationItem-page.Mui-selected:hover': {
    backgroundColor: '#7e2c25',  // maintain dark red color on hover for selected item
  },
}));





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
     
     
     <Typography
    fontStyle="italic"
    fontWeight={900}
    sx={{ fontSize: { lg: "44px", xs: "15px" } }}
    mb={{ lg: "80px", xs: "30px" }}
    textAlign="center"
  >
  
     <Box
      component="img"
      height={{ lg: "70px", xs: "50px" }}
      sx={{
        position: "relative",
        left: { lg: "30px", xs: "10px" },
        zIndex: "-1",
        top: { lg: "-10px", xs: "-5px" }
      }}
      src={boxes}
    />
    SHOWING RESULTS
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
      <StyledPagination
      shape="rounded"
      defaultPage={1}
      count={Math.ceil(exercises.length / exercisesPerPage)}
      page={currentPage}
      onChange={paginate}
    
      
    />
     )}


     </Stack>
      </Box>
  )
}

export default Excercises