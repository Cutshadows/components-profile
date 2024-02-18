import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from './index.module.css';
import { IconProps } from '../icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'warning' | 'dark';
	label?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement> | MouseEvent)=> void;
	icon?: React.ReactElement<IconProps>;
	size?: 's' | 'xs' | 'm' | 'l';
}

const Button: FC<ButtonProps> = ({ label, variant = 'primary', onClick, icon, size= 's', ...config }) => {
	const classConfiguration = `${styles.main} ${styles[variant]}`;
	const getIconSize = () => {
		if (size === 'xs') return 16;
		if (size === 'm') return 24;
		if (size === 'l') return 27;
		return 20;
	};
	
	const createRipple = (button: HTMLButtonElement, event: React.MouseEvent<HTMLButtonElement> | MouseEvent) => {
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
		circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
		circle.classList.add('ripple');

		const existingRipple = button.getElementsByClassName('ripple')[0];
		if (existingRipple) {
			existingRipple.remove();
		}

		button.appendChild(circle);
		onClick(event)
	};

	return (
		<button
			{...config}
			className={classConfiguration}
			onClick={(event) => createRipple(event.currentTarget as HTMLButtonElement, event)}
			data-icon={icon ? true: false}
			data-variant={variant}
			data-size={size}
		>
			{icon ? (
				<span className={styles.icon}>
					{React.cloneElement(icon, {
                size: Number(getIconSize()),
              })}
				</span>
			):(
				label ? label : 'Submit'
			)}
		</button>
	);
};

export default Button;
