import styles from './index.module.css';
const Badge = () => {
	return (
		<span className={styles.container}>
			<span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
			<span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
		</span>
	)
}

export default Badge