import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import boxes from '../Assets/boxes.png';
const ExerciseVideos = ({exerciseVideos , name}) => {

  console.log(exerciseVideos)
  console.log("these are the exercise videos")

  // const Myobj=[{title:'yahoo'},{title:"meho"},{title:"ghaiz"}]
  // const Myobj = [{ title: 'yahoo' }, { title: "meho" }, { title: 'ghaiz' }];
  return (
    <Box sx={{marginTop:{lg:'140px',xs:'20px'}}} p="20px">
      <Typography mb={5} fontStyle={'italic'} fontWeight={900} sx={{fontSize:{lg:'44px',xs:'30px'}}}  ><img height={70} style={{position:'relative',left:'30px',zIndex:'-1',top:'-10px'}} src={boxes}/> Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> Videos</Typography>
  
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{
        flexDirection:{lg:'row'},gap:{lg:'70px',xs:'0'}
      }}>
 
{exerciseVideos?.slice(0,3).map((item, index) => {
  console.log("my videos " + index); 

  return (
  <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer" > 
  <img src={item.video.thumbnails[0].url} alt={item.video.title} />
  <Box sx={{background:'black',flexDirection:'column',textAlign:'center',display:'flex',color:'white',padding:'20px'}}>
    <Typography variant='h6'>
      {item.video.title}
    </Typography>
    <Typography variant='h6' color={'#DF424D'} mt={1} pb={2}>
      {item.video.channelName}
    </Typography>
  </Box>
  </a>
  );
})}

      </Stack>
      </Box>
  )
}

export default ExerciseVideos