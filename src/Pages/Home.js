import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SearchExcercises from '../Components/SearchExcercises'
import Excercises from '../Components/Excercises'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import bg from '../Assets/bggo.png';
SwiperCore.use([Autoplay]);

// i will use React Context API here.
//you often need to manage the state at some component that has access to all Components that need that state and then you 
//need to share it through props and also update it with help of props
//props that take function which ultimately will edit the state.
//you need to pass that shared data through multiple layers of Components and that is Something thats called prop drilling.
//now we can get rid of all those props
//create the context value
//.........hmmm..................maybe later.

const Home = () => {
  const [bodyPart,setBodyPart]=useState('all');
  const [Exercises,SetExercises]=useState([]);
  return (
    <Box  >
       <img style={{position:"absolute",top:"-20px",zIndex:'-1', width:"1368px"}} src={bg}/>
      <HeroBanner/>
      <SearchExcercises SetExercises={SetExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Excercises SetExercises={SetExercises} bodyPart={bodyPart} exercises={Exercises}/>
     
      
      </Box>
  )
}

export default Home