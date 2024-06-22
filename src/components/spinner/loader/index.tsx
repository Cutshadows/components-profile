import styles from './index.module.css';
const Loading = () => {
	return ( 
		<>
			<div className={styles.glitch} data-glitch="Loading ...">
				Loading ...
			</div>
		</>
	);
}

export default Loading;