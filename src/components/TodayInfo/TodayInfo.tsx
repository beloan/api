import './TodayInfo.css';
import { Icon } from '../../icons/Icon.tsx';
// @ts-ignore
import sunriseImg from '../../assets/sunrise.png';
// @ts-ignore
import humidityImg from '../../assets/humidity.png';
// @ts-ignore
import sunsetImg from '../../assets/sunset.png';
// @ts-ignore
import windImg from '../../assets/wind.png';
// @ts-ignore
import pressureImg from '../../assets/pressure.png';
// @ts-ignore
import uvImg from '../../assets/uv.png';
import { conditionsWeather } from '../../Dictionaries.ts';
import { ResponseWeather } from '../../App.tsx';

interface Props {
    weather?: ResponseWeather;
}

export const TodayInfo= (props: Props) => {
    return (
        <div className={'container_today'}>
            <div className={'container_today__first'}>
                <div className={'today_temperature'}>
                    <div className={'today_temperature__degrees'}>{props.weather?.current.temp_c
                        ? props.weather.current.temp_c : '-'}°C
                    </div>

                    <div className={'today_temperature__feels'}>
                        Ощущается как:
                        <div>{props.weather?.current.feelslike_c ? props.weather.current.feelslike_c : '-'}°C</div>
                    </div>
                </div>

                <div className={'today_sun'}>
                    <div className={'today_sun__item'}>
                        <img src={sunriseImg} />

                        <div>
                            Восход
                            <div>{props.weather?.forecast.forecastday[0].astro.sunrise
                                ? props.weather.forecast.forecastday[0].astro.sunrise : '--:--'}</div>
                        </div>
                    </div>

                    <div className={'today_sun__item'}>
                        <img src={sunsetImg} />
                        <div>
                            Заход
                            <div>{props.weather?.forecast.forecastday[0].astro.sunset
                                ? props.weather.forecast.forecastday[0].astro.sunset : '--:--'}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container_today__second'}>
                <Icon
                    id={props.weather?.current.condition.text && conditionsWeather.has(props.weather.current.condition.text)
                        ? conditionsWeather.get(props.weather.current.condition.text)! : 'sunny'} width={170} />
                {props.weather?.current.condition.text ? props.weather.current.condition.text : ' Нет информации'}
            </div>

            <div className={'container_today__third'}>
                <div className={'today_factors'}>
                    <div className={'today_factors__item'}>
                        <img src={humidityImg} className={'today_factors__item'} />
                        <div className={'today_factors__item__first'}>
                            {props.weather?.current.humidity ? props.weather.current.humidity : '-'}%
                        </div>
                        <div className={'today_factors__item__second'}>Влажность</div>
                    </div>

                    <div className={'today_factors__item'}>
                        <img src={windImg} className={'today_factors__item'} />
                        <div className={'today_factors__item__first'}>
                            {props.weather?.current.wind_kph ? props.weather.current.wind_kph : '-'}км/ч
                        </div>
                        <div className={'today_factors__item__second'}>Скорость ветра</div>
                    </div>
                </div>

                <div className={'today_factors'}>
                    <div className={'today_factors__item'}>
                        <img src={pressureImg} className={'today_factors__item'} />
                        <div className={'today_factors__item__first'}>
                            {props.weather?.current.pressure_in ? props.weather.current.pressure_in : '-'}ГПа
                        </div>
                        <div className={'today_factors__item__second'}>Давление</div>
                    </div>

                    <div className={'today_factors__item'}>
                        <img src={uvImg} className={'today_factors__item'} />
                        <div className={'today_factors__item__first'}>
                            {props.weather?.current.uv ? props.weather.current.uv : '-'}
                        </div>
                        <div className={'today_factors__item__second'}>UV</div>
                    </div>
                </div>
            </div>
        </div>
    );
};