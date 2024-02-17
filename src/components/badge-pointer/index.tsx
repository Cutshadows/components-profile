import styles from './index.module.css';
const Badge = ({active}: {active: boolean}) => {
	console.log({active})
	return (
		<span className={styles.container}>
			<span className={styles.ping}></span>
			<span className={active ? styles.point : styles['point-lost-focus']}></span>
		</span>
	)
}

export default Badge