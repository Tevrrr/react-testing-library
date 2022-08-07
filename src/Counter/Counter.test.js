import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createReduxStore } from '../store/store';
import Counter from "./Counter";
import {Provider} from 'react-redux'

 describe('Counter test', () => {
    test('Test router', async () => {
        render(<Provider store={createReduxStore()}><Counter /></Provider>) ;
		const incrementBtn = screen.getByTestId('increment-btn');
		expect(screen.getByTestId('value-title')).toHaveTextContent('0');
		userEvent.click(incrementBtn);
		expect(screen.getByTestId('value-title')).toHaveTextContent('1');
	});
    
 });