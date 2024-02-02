

import styles from './index.module.css';

const BtnCalendar = () => {
	return (
		<div className={`${styles.container} ${styles.group}`}>
			<div className={styles['card-date']}>
				<div className={styles['card-text']}>
					<p className={styles.paragraph}> Sun </p>
					<p className={`${styles.paragraph} ${styles['paragraph-date']}`}> 11 </p>
				</div>
			</div>
		</div>
	)
}

export default BtnCalendar;
