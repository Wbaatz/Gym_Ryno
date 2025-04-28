import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import axios from 'axios';
import srchi from '../Assets/srchi.svg'
import { response,myResponse} from '../utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar';
import boxes from '../Assets/boxes.png';
import Srch from '../Assets/searchicon.png'
import { ReactSVG } from 'react-svg';
import styled, { css } from 'styled-components';
const StyledSvg = styled(ReactSVG)`
  svg {
    height: 20px;
    
    path {
      fill: white;
      transition: fill 0.3s;
    }
    
    ${({ theme }) => css`
      button:hover & path {
        fill: black;
      }
    `}

    @media (min-width: 768px) {
      height: 40px;

      path {
        fill: lightgray;
      }
      
      ${({ theme }) => css`
        button:hover & path {
          fill: darkgray;
        }
      `}
    }

    @media (min-width: 1024px) {
      height: 50px;

      path {
        fill: white;
      }

      ${({ theme }) => css`
        button:hover & path {
          fill: black;
        }
      `}
    }
  }
`;


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







    <Stack alignItems="center" mt={{ lg: "257px", xs: "30px" }} justifyContent="center">
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
    Awesome Exercise You <br /> Should Know
  </Typography>
  <Box position="relative" mb={{ lg: "122px", xs: "40px" }} mr={{ lg: "60px", xs: "60px" }}>
  <input
  id="searchInput"
 value={Search}
 onChange={(e) => SetSearch(e.target.value.toLowerCase())}
 placeholder='Search Exercises'
 type="text"

/>
    <Button
      variant="contained"
      sx={{
        position: "absolute",
        width: { lg: "85px", xs: "20px" },
        fontSize: { lg: "20px", xs: "5px" },
        height: {lg:'50px',xs:'29px'},
        borderRadius: "0px 50px 50px 0px",
        background: "rgba(200, 30, 30, 0.84)",
        "&:hover": {
          background: "#61FFE9"
        }
      }}
      onClick={HandleSearch}
    >
      <StyledSvg src={srchi} />
    </Button>
  </Box>
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
    BODY PARTS
  </Typography>
  <Box sx={{ position: "relative", width: "100%" }}>
    <HorizontalScrollbar
      data={bodyParts}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      isBodyParts
    />
  </Box>
</Stack>

  )
}

export default SearchExcercises