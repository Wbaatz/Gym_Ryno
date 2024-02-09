import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import axios from 'axios';
import { response,myResponse} from '../utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExcercises = ({SetExercises,bodyPart,setBodyPart}) => {

  const [Search, SetSearch] = useState('');

  const [bodyParts,setBodyParts]=useState([]);

//async means that this function is going to take some time.


// useEffect(()=>{
//   const fetchExerciseData=async ()=>{
//     const bodyPartsData=await fetchExerciseData('htttps://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
//   }
// },[])
useEffect(()=>{
  const fetchExerciseData= async ()=>{
 const BodyPartsData=(await myResponse('exercises/bodyPartList')).data;
 setBodyParts(['all',...BodyPartsData]);
  }
fetchExerciseData();
},[])


  const HandleSearch= async()=>{
  if(Search){
    // console.log( (await myResponse('exercises')).data);
    //  console.log( (await myResponse('exercises/bodyPartList')).data.filter(part => part === 'back'));
     const searchedExercise= (await myResponse('exercises')).data.filter(part=>part.bodyPart.toLowerCase().includes(Search)
     || part.target.toLowerCase().includes(Search) 
     || part.equipment.toLowerCase().includes(Search) 
     || part.bodyPart.toLowerCase().includes(Search) 
     );
     console.log(searchedExercise);

    SetSearch('');
    SetExercises(searchedExercise);


  }

  }
  return (
    <Stack alignItems="center"  mt="37px" justifyContent="center" >
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

      <Box sx={{position:'relative',width:'100%',o:"20px" }}>
<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />


      </Box>
      </Stack>
  )
}

export default SearchExcercises