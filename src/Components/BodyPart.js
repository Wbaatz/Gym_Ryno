import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../Assets/body.png'
import { CgGym } from "react-icons/cg";

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
   <Stack
     type="button"
     alignItems="center"
     justifyContent="center"
     className='bodyPart-card'
     sx={{//let sput something here
      boxShadow: bodyPart === item ? '7px -2px 13px 0px rgb(7 226 254 / 91%)' : '-6px 8px 13px 0px rgb(2 49 113 / 91%)',
        backgroundColor:  bodyPart === item ?'#24272a':'white',
        borderRadius:'20px 0px 20px 0px',
        width:'270px',
        height:'280px',
        cursor:'pointer',
        gap:'47px'
     }}
     onClick={()=>{
      setBodyPart(item);
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
   >
    {/* <img src={<CgGym/> } alt="dumbell" style={{width:'40px',height:'40px'}}/> */}
    <CgGym style={{fontSize:'50px',color: bodyPart === item ?'#00d9ff':'#24272a' }} />
    <Typography fontSize="24px" fontWeight="bold" color= {bodyPart === item ?'white':'#24272a'} textTransform="capitalize">{item}</Typography>
   </Stack>
  )
}

export default BodyPart