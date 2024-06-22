import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonSite from './index';
import jest from 'jest-mock';

describe('Button', () => {
	it('renders without crashing', () => {
		render(<ButtonSite children={undefined} attributes={undefined} />);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('renders the correct text', () => {
		const attributes = { onClick: () =>{}, name:'btn-name', text: 'Click me', className:"btn"};
		const {container} = render(<ButtonSite children={undefined} attributes={attributes} />);
		expect(container.querySelector('btn')).toMatchSnapshot();
	});

	it('calls the onClick function when clicked', () => {
		const onClickMock = jest.fn(); //ReferenceError: jest is not defined 
		const attributes = { onClick: onClickMock, name:'btn-name', text: 'Click me', className:"btn"};
		const { getByRole } = render(<ButtonSite attributes={attributes} children={undefined} />);
		const buttonElement = getByRole('button');
		fireEvent.click(buttonElement);
		expect(onClickMock).toHaveBeenCalled();
	});
});