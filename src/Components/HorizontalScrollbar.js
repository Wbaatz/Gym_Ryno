import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext, visibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../Assets/Ryno_logo.png'
import LeftArrowIcon from '../Assets/Ryno_logo.png'
import { red } from '@mui/material/colors';


const LeftArrow=()=>{
  const {scrollPrev}=useContext(VisibilityContext);
  return(
    <Typography onClick={()=> scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt='left-arrow' />
    </Typography>
  );
};

const RightArrow =()=>{
  const {scrollNext}=useContext(VisibilityContext);

  return(
    <Typography onClick={()=> scrollNext()} className="right-arrow"  >
      <img src={RightArrowIcon} alt="right-arrow"/>
    </Typography>
  )
}













const HorizontalScrollbar = ({data , bodyPart,setBodyPart}) => {
  return (
   
     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
{data.map((item)=>(
<Box bgcolor="#c9c9c9"
    itemId={item.id || item}
    title={item.id || item}
    m="0 40px"
    key={item.id}>

<BodyPart item={item} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>
</Box>

))}

    </ScrollMenu>
   
  )
}

export default HorizontalScrollbar