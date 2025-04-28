import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import bg from "../Assets/2ndDiv.png";
import BodyPartImage from "../Assets/body.png";
import TargetImage from "../Assets/body.png";
import EquipmentImage from "../Assets/body.png";
import muscle from "../Assets/muscle.svg";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import boxes from "../Assets/boxes.png";
const StyledSvg = styled(ReactSVG)`
svg{
height: 60px;
transition:fill 0.3s;

path{
fill:DF424D;
}

&:hover path {
 fill:#FF0012;
}

`;

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  console.log("im in the detail part");
  console.log(exerciseDetail);
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  //  console.log("in detail page "+exerciseDetail)
  //  const temp1 = exerciseDetail.data;

  // position: absolute;
  // width: 1195px;
  // height: 1118px;
  // left: 1213px;
  // top: 211px;

  // background: rgba(0, 0, 0, 0.5);

  console.log(gifUrl);

  return (
    <div>
      <img
        height={782}
        style={{
          width:'-webkit-fill-available',
          position: "absolute",
          top: "-20px",
          zIndex: "-1",
          // width: "100%",
          height: "1000px",
        }}
        src={bg}
      />

      <Stack
       
        sx={{
           gap:{xs:'10px',lg:'60px'},
          flexDirection: { lg: "row" },
          p: "20px",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } ,mb:{xs:'60px'}}}>
          <Typography
            fontStyle={"italic"}
            fontWeight={900}
            sx={{ fontSize: { lg: "44px", xs: "30px" }, color: "white",mb:{xs:'10px',lg:'66px'} ,mt:{xs:'20px',lg:''}}}
           
            textAlign="center"
          >
            <img
              height={70}
              style={{
                position: "relative",
                left: "30px",
                zIndex: "-1",
                top: "-10px",
              }}
              src={boxes}
            />
            {name}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={800}
            fontStyle={"normal"}
            color={"#CACACA"}
          >
            Exercises keep you strong. {name} is one of the best exercises to
            target your {target}. it will help you improve your mood and gain
            energy.
          </Typography>
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <StyledSvg src={muscle} />

              <Typography
                variant="h5"
                textTransform="capitalize"
                fontStyle={"normal"}
                fontWeight={800}
                color={"white"}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

export default Detail;
