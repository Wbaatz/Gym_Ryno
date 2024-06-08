import React, { useContext,useState ,useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import { FaArrowLeft } from "react-icons/fa";
import {ScrollMenu, VisibilityContext, visibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../Assets/Ryno_logo.png'
import LeftArrowIcon from '../Assets/Ryno_logo.png'
import { red } from '@mui/material/colors';
import { FaArrowRight } from "react-icons/fa";
import Cards from './Cards';
import {ReactSVG} from 'react-svg';
import styled from 'styled-components'
import LeftAr from '../Assets/leftArr.svg'
import RightAr from '../Assets/rightArr.svg'
const Arr=styled(ReactSVG)`
svg{
height:30px;

path{
transition: fill 0.3s;

}
  &:hover path {
      fill:#61FFE9;
    }


}
`

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const [Flag, setFlag] = useState('');

  useEffect(() => {
    setFlag(isBodyParts ? 'true' : 'false');
  }, [isBodyParts]);

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography
        onClick={() => scrollPrev()}
        className="left-arrow"
        style={{ bottom: Flag === 'false' ? '-320px' : '-240px' }}
      >
        <Arr src={LeftAr} />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography
        onClick={() => scrollNext()}
        className="right-arrow"
        style={{ bottom: Flag === 'false' ? '340px' : '240px' }}
      >
        <Arr src={RightAr} />
      </Typography>
    );
  };

  return (
    <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
      {data.map((item) => (
        <Box
          borderRadius="0px 0px 20px 0px"
          itemId={item.id || item}
          title={item.id || item}
          m="40px 40px"
          p="20px"
          key={item.id || item}
        >
          {isBodyParts ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <Cards exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};


export default HorizontalScrollbar