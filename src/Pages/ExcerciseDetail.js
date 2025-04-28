import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";
import { response, myResponse } from "../utils/FetchData";
import { myResponseYoutube } from "../utils/FetchData";

const ExcerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [TargetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Add loading state
  const { id } = useParams();

  useEffect(() => {
    const FetchExercisesData = async () => {
      setLoading(true); // Start loading
      try {
        const ExerciseDetailData = await myResponse(`exercises/exercise/${id}`);
        setExerciseDetail(ExerciseDetailData.data);

        const YoutubeData = await myResponseYoutube(ExerciseDetailData.data.name);
        setExerciseVideos(YoutubeData.data.contents);

        const targetMuscleExercisesData = await myResponse(
          `exercises/target/${ExerciseDetailData.data.target}`
        );
        setTargetMuscleExercises(targetMuscleExercisesData.data);

        const equipmentExercisesData = await myResponse(
          `exercises/equipment/${ExerciseDetailData.data.equipment}`
        );
        setequipmentExercises(equipmentExercisesData.data);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    FetchExercisesData();
  }, [id]);

  if (loading) {
    return (
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises
        TargetMuscleExercises={TargetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExcerciseDetail;
