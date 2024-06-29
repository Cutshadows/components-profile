import { render } from '@testing-library/react';
import Typograph from './index';

describe('Typograph', () => {
	it('renders the children correctly', () => {
		const { getByText } = render(
			<Typograph variant="p" applyDefaultStyles={true}>
				Hello World
			</Typograph>
		);
		expect(getByText('Hello World')).toBeInTheDocument();
	});

	it('applies the specified variant component', () => {
		const { container } = render(
			<Typograph variant="h1" applyDefaultStyles={true}>
				Heading 1
			</Typograph>
		);
		expect(container.firstChild).toContainElement(container.querySelector('h1'));
	});

	it('applies the specified custom className', () => {
		const { container } = render(
			<Typograph variant="p" className="custom-class" applyDefaultStyles={true}>
				Custom Class
			</Typograph>
		);
		expect(container.firstChild).toContainElement( container.querySelector('p'));
	});

	it('does not apply default styles when applyDefaultStyles is set to false', () => {
		const { container } = render(
			<Typograph variant="p" applyDefaultStyles={false}>
				No Default Styles
			</Typograph>
		);
		expect(container.firstChild).not.toHaveClass('default-styles');
	});


});