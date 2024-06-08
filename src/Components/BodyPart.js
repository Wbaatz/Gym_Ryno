import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../Assets/body.png'
import { CgGym } from "react-icons/cg";



// position: absolute;
// width: 369px;
// height: 264px;
// left: 138px;
// top: 143px;

// background: #000000;
// border-radius: 8px;




const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
   <Stack
     type="button"
     alignItems="center"
     justifyContent="center"
     className='bodyPart-card'
     sx={{//let sput something here
      boxShadow: bodyPart === item ? '7px -2px 13px 0px rgb(7 226 254 / 91%)' : '-6px 8px 13px 0px rgb(2 49 113 / 91%)',
        backgroundColor: '#24272a',
        borderRadius:'8px',
        width:'369px',
        height:'264px',
        cursor:'pointer',
        gap:'47px',
        marginTop:'50px'
     }}
     onClick={()=>{
      setBodyPart(item);
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
   >



{/* 
position: absolute;
width: 139px;
height: 134px;
left: 183px;
top: 76px;

background: #CA0000; */}



    <div style={{position:'absolute',width:'139px',height:'134px',top:'-70px',left:'40px', background:bodyPart === item ?'#61FFE9':'#CA0000',transition: 'background-color 0.3s ease'}}>

    </div>
    <CgGym style={{fontSize:'70px',color: bodyPart === item ?'#24272a':'white' ,position:'relative',top:'-80px',left:'-80px',transition: 'background-color 0.3s ease'}} />
    <Typography fontSize="48px" fontStyle={'normal'} fontFamily={'Inter'} fontWeight="800" color='white' textTransform="capitalize" position={'relative'} top={-60}>{item}</Typography>
   </Stack>
  )
}

export default BodyPart






// position: absolute;
// width: 158px;
// height: 58px;
// left: 248px;
// top: 246px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 800;
// font-size: 48px;
// line-height: 58px;
// /* identical to box height */

// color: #FFFFFF;

