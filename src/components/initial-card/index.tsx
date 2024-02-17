
import style from './index.module.css';
import { allowDrop, drag, drop } from '../../app/utils/drag.utils';


const InitialCard = () => {

  return (
	<div>
		<div id="div1" className={style.div1} onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>
			<div className={style.card} id="schedule-user" onClick={(_e)=>console.log(_e)} onDragStart={(event)=>drag(event)} draggable={true}>
						<label htmlFor="fileInput" className={style['input-add']}>
							<svg className={style['icon-plus']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
							</svg>
							<span className={style['principal-text']}>Add schedule time here</span>
							<span className={style['secondary-text']}>(or click to select)</span>
						</label>
				</div>
		</div>

		<div id="div2" className={style.div2} onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>
		</div>	
	</div>
  )
}

export default InitialCard