import './WeekInfo.css';
import {
    conditionsWeather,
    monthNames,
    weekdayNames,
} from '../../Dictionaries.ts';
import { Icon } from '../../icons/Icon.tsx';
import { ResponseWeather } from '../../App.tsx';

interface Props {
    date: Date;
    weather?: ResponseWeather;
}

export const WeekInfo = (props: Props) => {
    const getDate = (index: number): string => {
        const localData = new Date(
            props.date.getFullYear(),
            props.date.getMonth(),
            props.date.getDate() + index
        );
        return `${weekdayNames[localData.getDay()]}, ${localData.getDate()} ${monthNames[localData.getMonth()]}`;
    };

    const getWeatherIcon = (index: number): string => {
        if (
            props.weather == undefined ||
            !conditionsWeather.has(
                props.weather.forecast.forecastday[index].day.condition.text
            )
        ) {
            return 'sunny';
        }

        return conditionsWeather.get(
            props.weather!.forecast.forecastday[index].day.condition.text
        )!;
    };

    const getWeather = (index: number): string => {
        if (props.weather == undefined) {
            return '-°C/-°C';
        }
        return `${props.weather!.forecast.forecastday[index].day.mintemp_c}°C/${props.weather!.forecast.forecastday[index].day.maxtemp_c}°C`;
    };

    return (
        <div className={'container_week'}>
            <div className={'week_label'}>Прогноз на 3 дня:</div>

            <div className={'week_info'}>
                {[0, 1, 2].map((item) => (
                    <div className={'week_info__item'} key={item}>
                        <Icon id={getWeatherIcon(item)} width={50} />
                        <div className={'week_info__item__degrees'}>
                            {getWeather(item)}
                        </div>
                        <div className={'week_info__item__date'}>
                            {getDate(item)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
