import React from 'react';
import styles from './index.module.css';

type TypographTypes = {
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
	children: React.ReactNode;
	className?: string;
	applyDefaultStyles: boolean;
	[x: string]: unknown;
};

const Typograph = ({ variant = 'p', children, className, applyDefaultStyles = true, ...props }: TypographTypes) => {
	const Component = variant;

	const componentClassName = applyDefaultStyles ? `${styles.typography}${className}` : className;
	console.log('Typograph', { variant, children, className, props });
	return (
		<Component className={componentClassName} {...props}>
			{children}
		</Component>
	);
};

export default Typograph;
	
