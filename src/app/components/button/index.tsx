import React, { FC, ButtonHTMLAttributes } from 'react';
import btn from './index.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'warning' | 'dark';
	label?: string;
}

const Button: FC<ButtonProps> = ({ label, variant = 'primary', ...config }) => {
	const classConfiguration = `${btn.main} ${btn[variant]}`;
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
	};

	return (
		<button
			{...config}
			className={classConfiguration}
			onClick={(event) => createRipple(event.currentTarget as HTMLButtonElement, event)}
		>
			{label ? label : 'Submit'}
		</button>
	);
};

export default Button;
