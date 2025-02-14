import React from 'react';

const WeatherInfo = (props) => {
    return (
        <div>
            {props.city  ? (
                <div>
                    <p>City: {props.city}</p>
                    <p>Temperature: {Math.round(props.temp - 273.15)}</p>
                    <p>Sunrise: {props.sunrise}</p>
                    <p>Sunset: {props.sunset}</p>
                </div>
            ) : <p> Enter the city to go </p>

            }

        </div>
    );
};

export default WeatherInfo;