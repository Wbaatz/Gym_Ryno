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
      <div style={{backgroundColor:'#f8f8f8'}}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
       
        loop={true} // Enable loop
        pagination={{
          clickable: true
        }}
        autoplay={{
          "delay": 3000,
          "disableOnInteraction": false,
          "pauseOnMouseEnter":true
        }}
        speed={1500}
        navigation
    >
      <SwiperSlide >
        
        <HeroBanner/>
        
        
        </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
      </div>
      <HeroBanner/>
      <SearchExcercises SetExercises={SetExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Excercises SetExercises={SetExercises} bodyPart={bodyPart} exercises={Exercises}/>
      Home
      
      </Box>
  )
}

export default Home