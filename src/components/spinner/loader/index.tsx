import styles from './index.module.css';
const Loading = () => {
	return ( 
		<div>
			<div className={styles.glitch} data-glitch="Loading ...">
				Loading ...
			</div>
		</div>
	);
}

export default Loading;