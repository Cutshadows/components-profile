import styles from './index.module.css';
const MAX_LENGTH_DOTS = 10;
const DotSpinner = () => {
	const dots = new Array(MAX_LENGTH_DOTS);
	return ( 
		<div className={styles['dot-spinner']}>
			{dots.fill(MAX_LENGTH_DOTS, 0, dots.length - 1 ).map(( _, i)=> (
				<div key={i} className={styles['dot-spinner__dot']}></div>
			))}
		</div>
	);
}

export default DotSpinner;