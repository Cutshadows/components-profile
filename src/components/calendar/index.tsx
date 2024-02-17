import React from 'react';
import BtnCalendar from '../button-calendar';
import styles from './index.module.css';
import { dateNow, getCurrentWeek, prevNextWeek} from '../../app/utils/dates.utils';
import { Button } from '..';

type CalendarProps = {
	onClick: (day: Date)=> void;
	prevDate: () => void;
	nexDate: () => void;
};

const Calendar: React.FC<CalendarProps> = (props) => {
	const [activeDay, setActiveDay] = React.useState(dateNow.getUTCDay());
	const [currentWeek, setCurrentWeek] = React.useState<Date[]>([]);
	const [week, setCountWeek] = React.useState(0);
	const buttonRef = React.useRef<HTMLButtonElement>(null); 

	const handlePrevWeek = () => {
		setCountWeek(week + 7);
	}

	const handleNextWeek = () => {
		setCountWeek(week - 7);
	}
	React.useEffect(()=> {
		setCurrentWeek(getCurrentWeek());
	}, [])

	React.useEffect(()=> {
		console.log(week);
		console.log(prevNextWeek(week));
		setCurrentWeek(prevNextWeek(week));
	}, [week])

	const onClickGetDate = (e: Date) => {
		setActiveDay(e.getUTCDay());
		props.onClick(e)
	}

	return (
		<div className={styles.main}>
			<Button label="NEXT" variant="primary" onClick={handleNextWeek}>next</Button>
			<div className={styles.container}>
				{currentWeek.map(date=> (
					<BtnCalendar
						isActive={activeDay === date.getUTCDay()} 
						ref={buttonRef} 
						key={date.getTime()} 
						onClick={(e)=>onClickGetDate(e as Date)} 
						date={date} />
				))}
			</div>
			<Button label="PREV" variant="primary" onClick={handlePrevWeek}>PREV</Button>
			{/* <div className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12'>

				<div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Sun </p>
							<p className='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 11 </p>
						</div>
					</div>
				</div>

				<div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Mon </p>
							<p className='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 12 </p>
						</div>
					</div>
				</div>

				<div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Tue </p>
							<p className='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 13</p>
						</div>
					</div>
				</div>

				<div className='flex group bg-purple-300 shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center'>
					<span className="flex h-3 w-3 absolute -top-1 -right-1">
						<span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
					</span>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-purple-900 text-sm'> Wed </p>
							<p className='text-purple-900  mt-3 font-bold'> 14 </p>
						</div>
					</div>
				</div>

				<div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 content-center	 cursor-pointer justify-center w-16'>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Thu </p>
							<p className='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 15 </p>
						</div>
					</div>
				</div>

				<div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Fri </p>
							<p className='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 16 </p>
						</div>
					</div>
				</div>

				<div className='flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300'> Sat </p>
							<p className='text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300'> 17 </p>
						</div>
					</div>
				</div>


			</div> */}


		</div>
	)
}

export default Calendar;
