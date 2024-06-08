import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import axios from 'axios';
import srchi from '../Assets/srchi.svg'
import { response,myResponse} from '../utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar';
import boxes from '../Assets/boxes.png';
import Srch from '../Assets/searchicon.png'
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const StyledSvg = styled(ReactSVG)`
  svg {
    height: 30px;
     
    
    path {
      fill: white;
       transition: fill 0.3s;
    }

    ${({ theme }) => `
    button:hover & path {
      fill: black;
    }
  `}
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



// box-sizing: border-box;

// position: absolute;
// width: 683px;
// height: 72px;
// left: 383px;
// top: 269px;

// background: ;
// border: ;
// border-radius: 50px 0px 0px 50px;



    <Stack alignItems="center"  mt="257px" justifyContent="center" >
      <Typography fontStyle={'italic'} fontWeight={900} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="80px" textAlign="center"><img height={70} style={{position:'relative',left:'30px',zIndex:'-1',top:'-10px'}} src={boxes}/>Awesome Excercise You <br/> Should Know</Typography>
      <Box position="relative" mb="122px" mr="60px">
      <input style={{fontSize:'20px',height:'50px',fontWeight:'700',outline:'none',width:'500px',background:'rgba(255, 255, 255, 0.84)',borderRadius:'50px 0px 0px 50px',border:'2px solid #890404',boxSizing:'border-box',paddingLeft:'20px'}}
 
  value={Search}
  onChange={(e) => SetSearch(e.target.value.toLowerCase())}
  placeholder='Search Exercises'
  type="text"
 
/>







       <Button  variant='contained'
       sx={{position:'absolute',
            width:{lg:'85px',xs:'80px'},
            fontSize:{lg:'20px', xs:'14px'},
            height:'50px',
            borderRadius:'0px 50px 50px 0px',
            background:'rgba(200, 30, 30, 0.84)',
            '&:hover': {
      background: '#61FFE9'
    },
          }}
       onClick={HandleSearch}>
      
      <StyledSvg src={srchi}  />
       </Button>
      </Box>
      <Typography fontStyle={'italic'} fontWeight={900} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="20px" textAlign="center"><img height={70} style={{position:'relative',left:'30px',zIndex:'-1',top:'-10px'}} src={boxes}/>BODY PARTS</Typography>
      <Box sx={{position:'relative',width:'100%',o:"20px" }}>
<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />


      </Box>
      </Stack>
  )
}

export default SearchExcercises