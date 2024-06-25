import React from "react";
import { Box, Stack, Typography,Link } from "@mui/material";
import boxes from "../Assets/boxes.png";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  console.log("these are the exercise videos");

  // const Myobj=[{title:'yahoo'},{title:"meho"},{title:"ghaiz"}]
  // const Myobj = [{ title: 'yahoo' }, { title: "meho" }, { title: 'ghaiz' }];
  return (
    <Box sx={{ marginTop: { lg: "140px", xs: "20px" } }} p="20px">
      <Typography
        mb={5}
        fontStyle={"italic"}
        fontWeight={900}
        sx={{ fontSize: { lg: "44px", xs: "20px" } }}
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
        />{" "}
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Videos
      </Typography>

      <Stack
       
        flexWrap="wrap"
        alignItems="strech"
        sx={{
          flexDirection: { xs:'row' ,lg: "row" },
          gap: { lg: "70px", xs: "20px" }, justifyContent:{xs:'flex-start',lg:'center'}
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => {
          console.log("my videos " + index);

          return (
            <Link
            key={index}
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target="_blank"
      rel="noreferrer"
      underline="none"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: {
          xs: '45%',  // Full width on extra small screens
          lg: '80%', // Fixed width on large screens
        },
        height:{xs:'auto',lg:'300px'},
        textDecoration: 'none',
        backgroundColor: 'black',
        alignItems: 'center', // Ensure items are centered
        justifyContent: 'center', // Center the content vertically
      }}
          >
              <Box
      component="img"
      src={item.video.thumbnails[0].url}
      alt={item.video.title}
      sx={{
        width: '100%', // Adjust the width as needed
        height: 'auto', // Maintain aspect ratio
      }}
    />
              <Box
                sx={{
                  background: "black",
                  flexDirection: "column",
                  textAlign: "center",
                  display: "flex",
                  color: "white",
                  padding: "20px",
                }}
              >
                <Typography  sx={{
          fontSize: {
            xs: '15px', // Font size for extra small screens
            lg: '50px', // Font size for large screens
          }}} >{item.video.title}</Typography>
                <Typography variant="h6" color={"#DF424D"} mt={1} pb={2}>
                  {item.video.channelName}
                </Typography>
              </Box>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
