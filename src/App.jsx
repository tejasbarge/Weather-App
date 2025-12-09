import axios from "axios";
import { useState } from "react";
function App() {
 
  const [city,setCity]=useState("");
  const [weatherData,setWeatherData]=useState(null);
  const [error,setError]=useState("");
  
  const handleChange=(event)=>{
    setCity(event.target.value);
  }

  const handleSubmit=async (event)=>{
    event.preventDefault();
    setWeatherData(null);
    setError("");
    if(city.trim()===""){
      setError("pls enter a city");
      return;
    }
    try{
      const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=092118a173034becd19dc4fc149e2058&units=metric`);
      setWeatherData(res.data);
      console.log(res.data);
    }
    catch(err){
      if(city==""){
        setError("Please Enter city");
        console.log(error);
      }
      else{
        setError("City not found");
      }
    }
  }


  return (
    <div className="outer h-screen w-full flex justify-center items-center bg-[url(/public/sea.jpg)] bg-cover">
      <div className="whether shadow-2xl backdrop-blur-2xl p-4 rounded-xl text-center h-auto w-auto max-w-lg">
        
        <h1 className=" p-4 text-4xl mb-2 font-bold"> Wheather App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text"
          className="w-full p-2.5 mb-2.5 border-s-amber-50 rounded-2xl bg-amber-50 mb-5" 
          placeholder="Enter city"
          name="city"
          value={city}
          onChange={handleChange}
          />
          <button type="Submit" className="w-full  p-2.5 mb-2.5 bg-blue-300 rounded-2xl border-s-amber-50 text-xl hover:bg-blue-600">
            Get Wheather
          </button>
          </form>
           {error && (
          <p className="text-red-600 text-center mt-4 font-medium">{error}</p>
          )}
          {weatherData &&(
            <div className="mt-5 text-center">
               <h2 className="text-2xl font-semibold mt-2">
              {weatherData.name}, {weatherData.sys.country}
            </h2>

            <p className="text-4xl font-bold mt-2">
              {weatherData.main.temp}°C
            </p>

            <p className="text-lg mt-2 capitalize">
              {weatherData.weather[0].description}
            </p>
             <div className="flex justify-between mt-4 text-lg">
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind: {weatherData.wind.speed} m/s</p>
            </div>
            </div>
          )

          }


      </div>
    </div>
  );
}

export default App
