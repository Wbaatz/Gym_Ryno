
import axios from 'axios';

export async function  myResponse(path){
  const response = await axios.request({
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/${path}`,
    params: { limit: '10000' },
    headers: {
      'X-RapidAPI-Key': '04d1216a57msh748e314d919c21cp11816cjsna9e16d8bfd6b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })
  return response;
}
export async function  myResponse1(path){
  const response = await axios.request({
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/${path}`,
    params: { limit: '10000' },
    headers: {
      'X-RapidAPI-Key': '04d1216a57msh748e314d919c21cp11816cjsna9e16d8bfd6b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })
  return response;
}

export async function  myResponse2(path){
  const response = await axios.request({
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/${path}`,
    params: { limit: '10000' },
    headers: {
      'X-RapidAPI-Key': '04d1216a57msh748e314d919c21cp11816cjsna9e16d8bfd6b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })
  return response;
}

export async function  myResponseYoutube(path){
  const response = await axios.request({
    method: 'GET',
    url: `https://youtube-search-and-download.p.rapidapi.com/search?query=${path}`,
  //   params:{ query: path,
  //   next: 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D'
   
  // },
    headers: {
      'X-RapidAPI-Key': '21ccb4269emshf74be74b331a1adp10282ajsn578dc46469e9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  })
  return response;
}



 







