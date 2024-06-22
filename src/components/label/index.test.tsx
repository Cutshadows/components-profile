import { render, screen } from '@testing-library/react';
import Label from './index';

describe('Label component', () => {
	it('renders the correct text', () => {
		const labelText = 'Test Label';
		const attributes = { className: 'label', HTMLFormElement: 'label'};
		const {container} = render(<Label text={labelText}  {...attributes}/>);
		expect(container.querySelector('label')).toMatchSnapshot();
	});
	it('renders the label text correctly', () => {
		const labelText = 'Test Label';
		render(<Label text={labelText} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	it('applies the correct className prop', () => {
		const className = 'custom-label';
		const attributes = { className, HTMLFormElement: 'label'};
		render(<Label text="Test Label" {...attributes} />);
		expect(screen.getByText('Test Label')).toHaveClass(className);
	});

});