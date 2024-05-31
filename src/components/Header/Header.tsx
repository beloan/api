import './Header.css';
import { ChangeEvent, useState } from 'react';
import { City } from '../../App.tsx';

type ResponseCity = {
    data: [ResponseCityItem];
    links: [ResponseCityLink];
    metadata: {
        currentOffset: number;
        totalCount: number;
    };
}

type ResponseCityItem = {
    id: bigint;
    wikiDataId: string;
    type: string;
    city: string;
    name: string;
    country: string;
    countryCode: string;
    region: string;
    regionCode: string;
    regionWdId: string;
    latitude: number;
    longitude: number;
    population: bigint;
}

type ResponseCityLink = {
    rel: string;
    href: string;
}

interface Props {
    changeCity: (city: City) => void;
}

export const Header = (props: Props) => {
    const [input, setInput] = useState<string>("");
    const [searchResult, setSearchResult] = useState<ResponseCity>();

    const onClickButton = async (): Promise<void> => {
        return fetch(
            `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${input}&limit=10&sort=name`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key':
                        'fcc1d1d0b0mshfe809544f193715p14e89cjsnc80d69fcc87d',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
                },
            }
        )
            .then((response) => response.json())
            .then((response: ResponseCity) => {
                setSearchResult(response);
            })
            .catch((error) => console.log(error));
    };

    const onClickElement = (item: ResponseCityItem) => {
        props.changeCity({ name: item.name, latitude: item.latitude,
            longitude: item.longitude });
        setInput("");
        setSearchResult(undefined);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target;
        setInput(value.value);
    };

    return (
        <div className={'container_header'}>
            <div className={'label'}>Weather</div>

            <label className={'header_input'}>
                <input
                    className={'header_input'}
                    placeholder={'Выберете свой город (на английском языке)'}
                    onChange={onChange}
                    value={input}
                />

                <button className={'header_input'} onClick={onClickButton}>
                    Найти
                </button>
            </label>

            <div className={'cities'}>
                {searchResult?.data.map((item) => (
                    <div
                        key={item.id}
                        className={'city_item'}
                        onClick={() => onClickElement(item)}
                    >
                        {item.name}, {item.country}
                    </div>
                ))}
            </div>
        </div>
    );
};
