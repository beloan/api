import './HourlyInfo.css';
import { Icon } from '../../icons/Icon.tsx';
// @ts-ignore
import navigationImg from './../../assets/navigation.png';
import { conditionsWeather } from '../../Dictionaries.ts';
import { ResponseWeather } from '../../App.tsx';

interface Props {
    weather?: ResponseWeather;
}

export const HourlyInfo = (props: Props) => {
    return (
        <div className={'container_hourly'}>
            <div className={'hourly_label'}>Почасовой прогноз:</div>

            <div className={'hourly_info'}>
                {[0, 4, 8, 12, 16, 20].map((item) => (
                    <div className={'hourly_info__item'} key={item}>
                        <div className={'hourly_info__item__hours'}>
                            {item}:00
                        </div>
                        <Icon
                            id={
                                props.weather?.forecast.forecastday[0].hour[item]
                                    .condition.text &&
                                conditionsWeather.has(
                                    props.weather.forecast.forecastday[0].hour[item]
                                        .condition.text
                                )
                                    ? conditionsWeather.get(
                                          props.weather.forecast.forecastday[0].hour[
                                              item
                                          ].condition.text
                                      )!
                                    : 'sunny'
                            }
                            width={50}
                        />
                        <div className={'hourly_info__item__degrees'}>
                            {props.weather?.forecast.forecastday[0].hour[item].temp_c
                                ? props.weather?.forecast.forecastday[0].hour[item]
                                      .temp_c
                                : '-'}
                            °C
                        </div>
                        <img
                            src={navigationImg}
                            style={{
                                width: '35px',
                                rotate: `${
                                    props.weather?.forecast.forecastday[0].hour[item]
                                        .wind_degree
                                        ? props.weather.forecast.forecastday[0].hour[
                                              item
                                          ].wind_degree
                                        : 0
                                }deg`,
                            }} alt={""}
                        />
                        <div className={'hourly_info__item__wind_speed'}>
                            {props.weather?.forecast.forecastday[0].hour[item]
                                .wind_kph
                                ? props.weather.forecast.forecastday[0].hour[item]
                                      .wind_kph
                                : '-'}
                            км/ч
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
