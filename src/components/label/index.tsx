
type LabelProps = {
	text: string;
	attributes?: React.LabelHTMLAttributes<HTMLLabelElement> | undefined;
};

const Label: React.FC<LabelProps> = ({text, ...attributes} ) => <label {...attributes} >{text}</label>;

export default Label;
