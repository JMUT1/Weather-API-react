import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import {WEATHER_API_URL, WEATHER_API_KEY} from "./api"
import { useState } from 'react';


function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [currentForecast, setCurrentForecast] = useState(null)


  // LOGIC TO GET ALL DATA FETCH FOR THE CURRENT WEATER AND THE FORECAST, ALSO EXTENDINT IT SO YOU CAN USE ALGO THE LABEL INFO

const handleOnSearchChange = (searchData) => {
  // console.log(searchData);
  const [lat, lon] = searchData.value.split(" ")

// THE FETCH CALLS
  const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

  const forecastFetch = fetch (`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

  // MAKE A ARRAY WITH THE PROMISES
  Promise.all([currentWeatherFetch, forecastFetch])
    .then(async(response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json()

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setCurrentForecast({city:searchData.label, ...forecastResponse})
    })
    .catch((err)=> console.log(err));
}


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
{   currentWeather && <CurrentWeather data={currentWeather}/>
}    </div>
  );
}

export default App;
