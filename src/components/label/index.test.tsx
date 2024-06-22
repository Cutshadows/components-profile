import { render, screen } from '@testing-library/react';
import Label from './index';

describe('Label component', () => {
	it('renders the label text correctly', () => {
		const labelText = 'Test Label';
		render(<Label text={labelText} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	// it('applies the correct className prop', () => {
		// const className = 'custom-label';
		// render(<Label text="Test Label" className={className} />);
		// expect(screen.getByText('Test Label')).toHaveClass(className);
	// });

	// it('renders with the default className if no className prop is provided', () => {
		// render(<Label text="Test Label" />);
		// expect(screen.getByText('Test Label')).toHaveClass('label');
	// });

	// Add more tests here...
});