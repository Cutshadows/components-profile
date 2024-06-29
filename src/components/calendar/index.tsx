import React from 'react';
import BtnCalendar from '../button-calendar';
import styles from './index.module.css';
import { dateNow, getCurrentWeek, prevNextWeek} from '../../app/utils/dates.utils';
import { ButtonRipple, Icon } from '..';

export type CalendarProps = {
	onClick: (day: Date)=> void;
	prevDate: (week:Date[]) => void;
	nexDate: (week:Date[]) => void;
};

const Calendar: React.FC<CalendarProps> = (props) => {
	const [activeDay, setActiveDay] = React.useState(dateNow.toLocaleDateString());
	const [currentWeek, setCurrentWeek] = React.useState<Date[]>([]);
	const [week, setCountWeek] = React.useState(0);
	const buttonRef = React.useRef(null); 

	const handlePrevWeek = () => {
		setCountWeek(week + 7);
		props.prevDate(currentWeek);
	}

	const handleNextWeek = () => {
		setCountWeek(week - 7);
		props.prevDate(currentWeek);
	}
	React.useEffect(()=> {
		setCurrentWeek(getCurrentWeek());
	}, [])

	React.useEffect(()=> {
		setCurrentWeek(prevNextWeek(week));
	}, [week])

	const onClickGetDate = (e: Date) => {
		setActiveDay(e.toLocaleDateString());
		props.onClick(e)
	}

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles['side-prev']}>
					<ButtonRipple  icon={<Icon name="ArrowLeftOutline" size={48} />} size='m' variant="primary" onClick={handlePrevWeek} />
				</div>
				{currentWeek.map(date=> (
					<BtnCalendar
						isActive={activeDay === date.toLocaleDateString()} 
						ref={buttonRef} 
						key={date.getTime()} 
						onClick={(e: React.MouseEvent<HTMLButtonElement> | Date)=>onClickGetDate(e as Date)} 
						date={date} />
				))}
				<div  className={styles['side-next']}>
					<ButtonRipple icon={<Icon name="ArrowRightOutline" size={58} />} size='m' variant="primary" onClick={handleNextWeek} />
				</div>
			</div>
		</div>
	)
}

export default Calendar;
