import './DateInfo.css';

interface Props {
    city: string;
    time: string;
    weekDay: string;
    date: string;
}

export const DateInfo = (props: Props) => {
    return (
        <div className={'container_date'}>
            <div className={'today_label__first'}>{props.city}</div>
            <div className={'today_label__second'}>{props.time}</div>
            <div className={'today_label__third'}>{`${props.weekDay}, ${props.date}`}</div>
        </div>
    );
};
