
import style from './index.module.css';
const CardDetail = () => {
  return (
	<div className={style.main}>
	<div className={style.container}>
		{Array.from({length: 7}).map((_, index) => (
			<div key={index} className={style['card-container']}>
				<a className={`${style.group}`} href="">
					<p className={`${style.title}`}> End-to-end DevOps visibility </p>
					<p className={`${style.description}`}> Visualize and measure progress from idea through to production across all tools. </p>
					<div className={`${style['horizontal-bar']}`}> </div>
				</a>
			</div>
		))}
		
	</div>
	</div>
  )
}

export default CardDetail