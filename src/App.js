import React, {useState} from 'react';
import Info from './components/Info';
import Form from './components/form/Form';
import WeatherInfo from './components/Weather_info/WeatherInfo';

const API_KEY = "ec9054749870836229199072828b062e"

const App = () => {

    const [weatherState,setWeatherState] = useState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    })


    const gettingWeather = async (e) => {
        e.preventDefault();
        const city_name = e.currentTarget.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`);
        const data = await api_url.json();
        console.log(data)

        setWeatherState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            error: data.message
        })
    }

    return (
        <div>
            <Info />
            <Form getWeather={gettingWeather} />
            <WeatherInfo
            temp={weatherState.temp}
            city={weatherState.city}
            country={weatherState.country}
            sunrise={weatherState.sunrise}
            sunset={weatherState.sunset}
            error={weatherState.error}
            />
        </div>
    );
};

export default App;