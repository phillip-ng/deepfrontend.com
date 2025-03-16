'use client'
import { useState } from 'react'

// Switch button to switch between cloudy, rainy and snowy weather
const WeatherSwitch = () => {
  const [weather, setWeather] = useState('cloudy')

  const handleWeatherChange = (newWeather: string) => {
    setWeather(newWeather)
  }

  return (
    <div>
      <div>
        <button onClick={() => handleWeatherChange('cloudy')}>Cloudy</button>
        <button onClick={() => handleWeatherChange('rainy')}>Rainy</button>
        <button onClick={() => handleWeatherChange('snowy')}>Snowy</button>
      </div>
      <div>
        <p>Current Weather: {weather}</p>
      </div>
    </div>
  )
}

export default WeatherSwitch
