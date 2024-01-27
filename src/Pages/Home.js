import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SearchExcercises from '../Components/SearchExcercises'
import Excercises from '../Components/Excercises'
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
      Home
      
      </Box>
  )
}

export default Home