import React from 'react';
import { dateNow, dayNames } from '../../app/utils/dates.utils';
import Badge from '../badge-pointer';
import styles from './index.module.css';
import Button from '../button';

// Define a type for the ref. Assuming it's a button ref:
type Ref = React.RefObject<HTMLButtonElement>;

export type BtnCalendarProps = {
	onClick: (event: React.MouseEvent<HTMLButtonElement> | Date) => void;
	type?: 'submit' | 'button';
	date: Date;
	isActive: boolean;
	ref: React.Ref<HTMLButtonElement>;
}

// eslint-disable-next-line react-refresh/only-export-components
const BtnCalendar: React.ForwardRefRenderFunction<Ref, BtnCalendarProps> = ({onClick, type, date, isActive }, ref) => {
	const onChangeDay = (date: Date) => {
		onClick(date);
	}
	
	const attibutes = {
		ref,
		onClick: () => onChangeDay(date),
		type: type || 'button',
		className: `${styles.container} ${styles.group}  ${  isActive && styles.active}`
	}

	return (
		<Button attributes={attibutes} >
			{date.toLocaleDateString() === dateNow.toLocaleDateString() && (
				<Badge active={isActive} />
			)}
			<div className={`${styles['card-date']}`}>
				<div className={`${styles['card-text']}`}>
					<p className={`${styles.paragraph}`}>{dayNames[date.getDay()].slice(0, 3)}</p>
					<p className={`${styles.paragraph} ${styles['paragraph-date']}`}>{date.getDate()}</p>
				</div>
			</div>
		</Button>
	)
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef(BtnCalendar);