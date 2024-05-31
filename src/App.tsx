import './App.css';
import { Header, WeekInfo, TodayInfo, DateInfo, HourlyInfo } from './components';
import { useEffect, useState } from 'react';
import { monthNames, weekdayNames } from './Dictionaries.ts';

export type City = {
    name: string;
    latitude: number;
    longitude: number;
}

export type ResponseWeather = {
    current: {
        temp_c: number;
        condition: {
            text: string;
        };
        wind_kph: number;
        pressure_in: number;
        humidity: number;
        feelslike_c: number;
        uv: number;
    };
    forecast: {
        forecastday: [ResponseWeatherItem];
    };
}

type ResponseWeatherItem = {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
            text: string;
        };
    };
    astro: {
        sunrise: string;
        sunset: string;
    };
    hour: [ResponseWeatherHour];
}

type ResponseWeatherHour = {
    time: string;
    temp_c: number;
    condition: {
        text: string;
    };
    wind_kph: number;
    wind_degree: number;
}

function App() {
    const CityState: City = {
        name: 'Kazan',
        latitude: 55.78874,
        longitude: 49.12214,
    };
    
    const [selectedCity, setSelectedCity] = useState<City>(CityState);
    const [dateState, setDateState] = useState<Date>(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    const [weather, setWeather] = useState<ResponseWeather | undefined>();

    const getHourlyWeather = async (): Promise<void> => {
        return fetch(
            `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${selectedCity.latitude},${selectedCity.longitude}&days=3`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key':
                        'fcc1d1d0b0mshfe809544f193715p14e89cjsnc80d69fcc87d',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                },
            }
        )
            .then((response) => response.json())
            .then((response: ResponseWeather) => {
                setWeather(response);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            getHourlyWeather();
        }
        return () => {
            ignore = true;
        };
    }, []);

    const changeCity = (city: City) => {
        setSelectedCity({
            name: city.name,
            latitude: city.latitude,
            longitude: city.longitude,
        });
        getHourlyWeather();
    };

    return (
        <div className="container_app">
            <Header changeCity={changeCity} />
            <div className={'container_app__first'}>
                <DateInfo
                    city={selectedCity.name}
                    date={`${dateState.getDate()} ${monthNames[dateState.getMonth()]}`}
                    weekDay={weekdayNames[dateState.getDay()]}
                    time={`${dateState.getHours()}:${
                        dateState.getMinutes().toString().length === 1
                            ? '0' + dateState.getMinutes()
                            : dateState.getMinutes()
                    }`}
                />
                <TodayInfo weather={weather} />
            </div>
            <div className={'container_app__first'}>
                <WeekInfo date={dateState} weather={weather} />
                <HourlyInfo weather={weather} />
            </div>
        </div>
    );
}

export default App;
