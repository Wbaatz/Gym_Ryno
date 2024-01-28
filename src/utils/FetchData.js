
import axios from 'axios';
 export const excerciseOptions = await axios.request({
       method: 'GET',
       url: 'https://exercisedb.p.rapidapi.com/exercises',
       params: { limit: '10000' },
       headers: {
         'X-RapidAPI-Key': 'b0eddbc0e7mshadee708ebd9c37fp173168jsncf90b727b15d',
         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
       }
     });

     export const ExcerciseData=excerciseOptions.data;







