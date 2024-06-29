import { Icon } from '../..';
import styles from './index.module.css'
const PrevLoading = () => {
	return ( 
		<div className={styles.svg} data-id="prev-loader" >
			<Icon name="SpinnerLoading" />
		</div>
	);
}
 
export default PrevLoading;