# 🌤️ Weather App (React + Axios + OpenWeather API)

A simple and clean weather application built using React, Axios, and the OpenWeatherMap API.
Users can search for any city and view real-time weather information including temperature, humidity, wind speed, and weather description.

## ✨ Features

🔍 Search weather by city name

🌡️ Real-time temperature in Celsius

⛅ Weather description + weather icon

💧 Humidity information

🍃 Wind speed

⚠️ Error handling for:

Empty input

Invalid city names (404)

## 🎨 Styled using Tailwind CSS

🛠️ Tech Stack
Technology	Description
React	Frontend framework
Axios	HTTP requests
Tailwind CSS	Styling
OpenWeatherMap API	Weather data
🔧 Installation
# Clone the repository
git clone https://github.com/tejasbarge/Weather-App.git

# Go into the project folder
``` 
cd weather-app 
```

# Install dependencies
```
npm install
```

# Start the app
```
npm run dev
```

Your app will run at:
👉 http://localhost:5173

## 🔑 API Setup

Go to https://openweathermap.org/api

Create an account and get your API key

Replace your key in the axios URL inside App.jsx:

appid=YOUR_API_KEY
## Screenshots
![Result](screenshots/image.png)
## 📁 Project Structure
src/
│── App.jsx       
│── main.jsx      
│── index.css     
public/
│── sea.jpg       

### How It Works

The app sends a GET request to:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

✔ If city exists → Show weather
❌ If city doesn't exist → Show "City not found"
⚠ If input is empty → Show "Please enter a city"
🖼️ UI Preview





🚀 Future Enhancements

🌎 Auto-detect location (GPS)

🌙 Dark / Light Theme toggle

📅 7-day forecast support

⭐ Save recent searches

🎨 Weather-based animated backgrounds