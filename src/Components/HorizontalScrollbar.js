import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { FaArrowLeft } from "react-icons/fa";
import {ScrollMenu, VisibilityContext, visibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../Assets/Ryno_logo.png'
import LeftArrowIcon from '../Assets/Ryno_logo.png'
import { red } from '@mui/material/colors';
import { FaArrowRight } from "react-icons/fa";
import Cards from './Cards';
const LeftArrow=()=>{
  const {scrollPrev}=useContext(VisibilityContext);
  return(
    <Typography onClick={()=> scrollPrev()} className="left-arrow">
  <FaArrowLeft  style={{fontSize:'50px'}}/>
    </Typography>
  );
};

const RightArrow =()=>{
  const {scrollNext}=useContext(VisibilityContext);

  return(
    <Typography onClick={()=> scrollNext()} className="right-arrow"  >
     <FaArrowRight style={{fontSize:'50px'}} />
    </Typography>
  )
}













const HorizontalScrollbar = ({data , bodyPart,setBodyPart,isBodyParts}) => {
  console.log("in the hprizontal scroll bar")
  console.log(data);
  return (
   
     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
{data.map((item)=>(
<Box borderRadius="0px 0px 20px 0px"
    itemId={item.id || item}
    title={item.id || item}
    m="40px 40px"
    key={item.id}>
      
      {/* <BodyPart item={item} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>  */}
{isBodyParts  ?<BodyPart item={item} bodyPart={bodyPart}  setBodyPart={setBodyPart}/> : <Cards exercise={item}/>}
</Box>

))}

    </ScrollMenu>
   
  )
}

export default HorizontalScrollbar