
 import './Cards.css';
 import '../App.css';
import React from 'react'
import {Link} from 'react-router-dom';
import '../Components/Cards.css'
import {Stack,typography,Box} from '@mui/material';
const Cards = ({exercise}) => {
  return (


<Link className="core-concepts"  to={`/exercise/${exercise.id}`}>
<img  src={exercise.gifUrl}  alt={exercise.name} loading="lazy"/>
<Stack direction="row">
    <button className="btn">
    {exercise.bodyPart}
    </button>
    <button className="btn2" >
    {exercise.target}
    </button>
{/* <Button sx={{ml:'21px',color:'white',background:'#bd0707' ,fontSize:'14px',borderRadius:'20px',textTransform:'capitalized',padding:'3px 4px 3px 4px',fontWeight:'bold'}}>
    {exercise.bodyPart}
</Button> */}

</Stack>
</Link>


  );
};

export default Cards

    // <li>
{/*            
    <img id='backGd' src={props.image}  alt={props.title}/>
    <h1 id='title'>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.Price}</p>
      <button className='button'>Readmore</button> */}
//   </li>

