import styles from './index.module.css';
const MAX_LENGTH_SQUARE = 10;
const LoaderSquare = () => {
		const dots = new Array(MAX_LENGTH_SQUARE);
	return ( 
		<div className={styles.loader}>
			{dots.fill(MAX_LENGTH_SQUARE, 0, dots.length - 1 ).map(( _, i)=> (
				<div key={i} className={styles['loader-square']}></div>
			))}
		</div>
	);
}
 
export default LoaderSquare;