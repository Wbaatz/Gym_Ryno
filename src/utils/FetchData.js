
import axios from 'axios';


//
export async function  myResponse(path){
  const response = await axios.request({
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/${path}`,
    params: { limit: '10000' },
    headers: {
      'X-RapidAPI-Key': 'b0eddbc0e7mshadee708ebd9c37fp173168jsncf90b727b15d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })
  return response;
}



 







