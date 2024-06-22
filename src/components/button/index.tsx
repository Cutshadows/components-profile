
/**
 * Props for the CustomButton component.
 */
type ButtonPropsType = {
	children: React.ReactNode;
	attributes: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
};

/**
 * A custom button component.
 *
 * @param {ButtonPropsType} props - The props for the component.
 * @returns {JSX.Element} The rendered button element.
 */
const Button: React.FC<ButtonPropsType> = ({ children, attributes }) => {
	return <button type="button" {...attributes}>{children}</button>;
}

export default Button;