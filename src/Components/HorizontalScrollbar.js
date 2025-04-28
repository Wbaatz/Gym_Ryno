import React, { useContext,useState ,useEffect,useRef} from 'react'
import { Box, Typography,Stack } from '@mui/material'
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

// const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
//   const [Flag, setFlag] = useState('');

//   useEffect(() => {
//     setFlag(isBodyParts ? 'true' : 'false');
//   }, [isBodyParts]);

//   const LeftArrow = () => {
//     const { scrollPrev } = useContext(VisibilityContext);
//     return (
//       <Typography
//         onClick={() => scrollPrev()}
//         className="left-arrow"
//         style={{ bottom: Flag === 'false' ? '-320px' : '-240px' }}
//       >
//         <Arr src={LeftAr} />
//       </Typography>
//     );
//   };

//   const RightArrow = () => {
//     const { scrollNext } = useContext(VisibilityContext);
//     return (
//       <Typography
//         onClick={() => scrollNext()}
//         className="right-arrow"
//         style={{ bottom: Flag === 'false' ? '340px' : '240px' }}
//       >
//         <Arr src={RightAr} />
//       </Typography>
//     );
//   };

//   return (
//     <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
//       {data.map((item) => (
//         <Box
//           borderRadius="0px 0px 20px 0px"
//           itemId={item.id || item}
//           title={item.id || item}
//           sx={{
//             m: { xs: '20px 20px', lg: '40px 40' },
//             p: { xs: '10px', lg: '20px' },
//           }}
//           key={item.id || item}
//         >
//           {isBodyParts ? (
//             <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
//           ) : (
//             <Cards exercise={item} />
//           )}
//         </Box>
//       ))}
//     </ScrollMenu>
//   );
// };


// export default HorizontalScrollbar
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = getScrollAmount();
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };
  
  const scrollRight = () => {
    const scrollAmount = getScrollAmount();
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };
  
  const getScrollAmount = () => {
    if (window.matchMedia("(max-width: 575.98px)").matches) {
      // xs screens (extra small)
      return 345;
    } else if (window.matchMedia("(min-width: 1200px)").matches) {
      // lg screens (large and above)
      return 400;
    } else {
      // default case for other screen sizes
      return 420;
    }
  };

  return (
    <Stack
     direction={'row'}
     gap={2}
     marginX={3}
     alignItems={'center'}
    >
      <Typography
        onClick={scrollLeft}
        className="left-arrow"
        style={{ cursor: 'pointer', zIndex: 2 }}
      >
      <Arr src={LeftAr} />
      </Typography>

      <Stack
        ref={scrollRef}
        direction={'row'}
        overflow={'auto'}
        scrollBehavior={'smooth'}
        whiteSpace={'nowrap'}
        gap={'84px'}
       paddingX={0}
      >
        {data.map((item) => (
          <Box
            borderRadius="0px 0px 20px 0px"
            itemId={item.id || item}
            title={item.id || item}
            sx={{
              m: { xs: '20px 20px', lg: '' },
              p: { xs: '10px', lg: '' },
              display: 'inline-block',
            }}
            key={item.id || item}
          >
            {isBodyParts ? (
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            ) : (
              <Cards exercise={item} />
            )}
          </Box>
        ))}
    </Stack>
      <Typography
        onClick={scrollRight}
        className="right-arrow"
        style={{ cursor: 'pointer', zIndex: 2 }}
      >
     <Arr src={RightAr} />
      </Typography>
    </Stack>
  );
};

export default HorizontalScrollbar