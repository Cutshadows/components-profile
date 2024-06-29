import styles from './index.module.css';

export type BadgeProps = {
	active: boolean;
}

const Badge = ({active}: BadgeProps) => {
	return (
		<span className={styles.container}>
			<span className={styles.ping}></span>
			<span className={active ? styles.point : styles['point-lost-focus']}></span>
		</span>
	)
}

export default Badge