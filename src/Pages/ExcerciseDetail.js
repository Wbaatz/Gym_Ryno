import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../Components/Detail";
import ExerciseVideos from "../Components/ExerciseVideos";
import SimilarExercises from "../Components/SimilarExercises";
import { response, myResponse } from "../utils/FetchData";
import { myResponseYoutube } from "../utils/FetchData";
const ExcerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseDetail1, setExerciseDetail1] = useState();
  const [exerciseDetail3, setExerciseDetail3] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [TargetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setequipmentExercises] = useState([]);
  const { id } = useParams();
  console.log("id is " + id);
  useEffect(() => {
    const FetchExercisesData = async () => {
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
    };

    FetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        TargetMuscleExercises={TargetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExcerciseDetail;
