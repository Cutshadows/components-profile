
import style from './index.module.css';
import { allowDrop, drag, drop } from '../../app/utils/drag.utils';


export type InitialCardProps = {
	onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>void;
	draggable: boolean;
};

const InitialCard = (props : InitialCardProps) => {

  return (
	<>
		<div id="div1" className={style.div1} onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>
			<div 
				className={style.card} 
				id="schedule-user" 
				onClick={(_e)=>props.onClick(_e)} 
				onDragStart={(event)=>drag(event)} 
				draggable={props.draggable}>
						<label htmlFor="fileInput" className={style['input-add']}>
							<svg className={style['icon-plus']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
							</svg>
							<span className={style['principal-text']}>Add schedule time here</span>
							<span className={style['secondary-text']}>(or click to select)</span>
						</label>
				</div>
		</div>

		<div id="div2" className={style.div2} onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>
		</div>	
	</>
  )
}

export default InitialCard