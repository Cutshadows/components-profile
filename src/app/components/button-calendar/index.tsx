

import { dateNow, dayNames } from '../../utils/dates.utils';
import Badge from '../badge-pointer';
import styles from './index.module.css';

const BtnCalendar = ({ date }:{date: Date}) => {
	return (
		<div className={`${styles.container} ${styles.group}  ${dateNow.getUTCDay() === date.getUTCDay() && styles.active}`}>
			{date.getUTCDate() === dateNow.getUTCDate() && (
				<Badge />
			)}
			<div className={`${styles['card-date']}`}>
				<div className={`${styles['card-text']}`}>
					<p className={`${styles.paragraph}`}>{dayNames[date.getDay()].slice(0, 3)}</p>
					<p className={`${styles.paragraph} ${styles['paragraph-date']}`}>{date.getDate()}</p>
				</div>
			</div>
		</div>
	)
}

export default BtnCalendar;
