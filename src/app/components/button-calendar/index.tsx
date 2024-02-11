

import React from 'react';
import { dateNow, dayNames } from '../../utils/dates.utils';
import Badge from '../badge-pointer';
import styles from './index.module.css';

type BtnCalendarProps = {
	onClick: (event: React.MouseEvent<HTMLButtonElement> | Date) => void;
	type?: 'submit' | 'button';
	date: Date;
	isActive: boolean;
}

const BtnCalendar: React.FC<BtnCalendarProps> = React.forwardRef(({onClick, type, date, isActive }, ref) => {
	const onChangeDay = (date: Date) => {
		onClick(date);
	}
	
	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<button ref={ref as any} onClick={()=>onChangeDay(date)} 
			type={type} 
			className={`${styles.container} ${styles.group}  ${  isActive && styles.active}`}>
			{date.getUTCDate() === dateNow.getUTCDate() && (
				<Badge active={isActive} />
			)}
			<div className={`${styles['card-date']}`}>
				<div className={`${styles['card-text']}`}>
					<p className={`${styles.paragraph}`}>{dayNames[date.getDay()].slice(0, 3)}</p>
					<p className={`${styles.paragraph} ${styles['paragraph-date']}`}>{date.getDate()}</p>
				</div>
			</div>
		</button>
	)
})

export default BtnCalendar;
