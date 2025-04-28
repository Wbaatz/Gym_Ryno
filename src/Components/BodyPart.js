import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../Assets/body.png'
import { CgGym } from "react-icons/cg";
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

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
        width: { xs: '200px', lg: '280px' },
        height: { xs: '150px', lg: '242px' },
        cursor: 'pointer',
        gap: { xs: '20px', lg: '47px' },
        marginTop: { xs: '20px', lg: '50px' },
     }}
     onClick={()=>{
      setBodyPart(item);
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }}
   >






<ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'absolute',
          width: { xs: '100px', lg: '139px' },
          height: { xs: '100px', lg: '134px' },
          top: { xs: '-30px', lg: '-70px' },
          left: { xs: '20px', lg: '10px' },
          background: bodyPart === item ? '#61FFE9' : '#CA0000',
          transition: 'background-color 0.3s ease',
        }}
      >
      </Box>
    </ThemeProvider>
    <Box
      sx={{
        fontSize: { xs: '50px', lg: '70px' },
        color: bodyPart === item ? '#24272a' : 'white',
        position: 'relative',
        top: { xs: '-40px', lg: '-80px' },
        left: { xs: '-40px', lg: '-80px' },
        transition: 'background-color 0.3s ease',
      }}
    >
      <CgGym />
    </Box>
    <Typography  sx={{
          fontSize: { xs: '24px', lg: '48px' },
          fontStyle: 'normal',
          fontFamily: 'Inter',
          fontWeight: 800,
          color: 'white',
          textTransform: 'capitalize',
          position: 'relative',
          top: { xs: -30, lg: -60 },
        }}>{item}</Typography>
   </Stack>
  )
}

export default BodyPart






