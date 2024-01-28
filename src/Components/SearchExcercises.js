import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import axios from 'axios';
import { ExcerciseData} from '../utils/FetchData'
const SearchExcercises = () => {

  const [Search, SetSearch] = useState('')
  const [Exercises,SetExercises]=useState([])
//async means that this function is going to take some time.
  const HandleSearch= async()=>{
  if(Search){
  
   console.log(ExcerciseData);
   const searchedExercise=ExcerciseData.filter(
        (ex)=>ex.name.toLowerCase().includes(Search) 
              || ex.target.toLowerCase().includes(Search) 
              || ex.equipment.toLowerCase().includes(Search) 
              || ex.bodyPart.toLowerCase().includes(Search) 

   )
   SetSearch('');
   console.log(searchedExercise);
   SetExercises(searchedExercise);


  }

  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">Awesome Excercise You <br/> Should Know</Typography>
      <Box position="relative" mb="72px" mr="180px">
       <TextField height="76px"
                  value={Search}
                  onChange={(e)=>SetSearch(e.target.value.toLowerCase())}
                  placeholder='Search Exercises'
                  type="text" 
                  sx={{
                    input:{fontWeight:'700',
                    border:'none',borderRadius:'4px'},
                    width:{lg:'800px',xs:'350px'},
                    backgroundColor:'#fff',
                    borderRadius:'40px'
                  }}
       />
       <Button  variant='contained'
       sx={{position:'absolute',
            width:{lg:'175px',xs:'80px'},
            fontSize:{lg:'20px', xs:'14px'},
            height:'56px'
          }}
       onClick={HandleSearch}>
        Search
       </Button>
      </Box>
      </Stack>
  )
}

export default SearchExcercises