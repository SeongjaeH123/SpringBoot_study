import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {

    let city = 'Gwangju'
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather`
    //+?q=${city}&appid=${API_KEY}&units=metric

    const [icon, setIcon] = useState("")
    const [weather, setWeather] = useState({})

    const today = new Date();

    const getWeatherData = async () => {
        try {
            const res = await axios.get(WEATHER_URL,{
                params: {
                    appid: API_KEY,
                    q: city,
                    units: "metric"
                }
            })
            const data = res.data
            setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            setWeather({
                icon: data.weather[0].icon,
                location: data.name,
                temp: data.main.temp
            })
            console.log(weather.location)

        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getWeatherData()
    },[])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{today.getFullYear()}.{`0${today.getMonth()}`.slice(-2)}.{`0${today.getDate()}`.slice(-2)}</h1>
            <img src={icon} alt="날씨 아이콘" />
            <p>현재 {weather.location}은 {weather.temp}ºC 입니다.</p>
        </div>
    )
}

export default Weather