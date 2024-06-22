import { fireEvent, render } from "@testing-library/react";
import ButtonRipple from ".";
import jest from 'jest-mock';

describe('unit test on button', () => {
	it('when things happend on click button', () => {
		const onClick = jest.fn();
		const date = new Date();
		const isActive = true;
		const ref = { current: null };
		// const type = 'submit';
		const props = { onClick, date, isActive, ref, current: null, variant: 'primary' as 'primary' | 'secondary' | 'warning' | 'dark' , size: 's' as 's' | 'xs' | 'm' | 'l'};
		const { container } = render(<ButtonRipple {...props} />);
		const button = container.querySelector('button');
		if(!button) throw new Error('button not found');
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalled();
	});
});