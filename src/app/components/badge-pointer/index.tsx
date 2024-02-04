import styles from './index.module.css';
const Badge = () => {
	return (
		<span className={styles.container}>
			<span className={styles.ping}></span>
			<span className={styles.point}></span>
		</span>
	)
}

export default Badge