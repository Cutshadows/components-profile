import React from 'react';
import style from './index.module.css';

export type LabelProps = {
	text: string;
	attributes?: React.LabelHTMLAttributes<HTMLLabelElement> | undefined;
	icon?: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ text, icon, ...attributes }) => {
	return (
		<label {...attributes}>
			{icon && <span className={style['label-icon']}>{icon}</span>}
			{text}
		</label>
	);
};

export default Label;
