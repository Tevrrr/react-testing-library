/** @format */

import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { render, screen, fireEvent } from '@testing-library/react';
import  userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from './App';

describe('Test APP', () => {
	// find  - асинхронное использование
	// get   - поиск какого-то компонента иначе будет ошибка
	// query - проверка на отсутствие компонента или его наличие неважно
	test('get', () => {
		render(<MemoryRouter><App /></MemoryRouter>);
		const helloWorldElement = screen.getByText(/hello world/i);
		const btn = screen.getByRole('button');
		const input = screen.getByPlaceholderText(/input.../i);
		expect(helloWorldElement).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(input).toMatchSnapshot();
		// screen.debug(); Скрин отрендереного компонента
	});

	test('query', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		const noHelloWorldElement = screen.queryByText(/no hello world/i);
		expect(noHelloWorldElement).toBeNull();
    });
    
	// test('find', async () => {
	// 	render(
	// 		<MemoryRouter>
	// 			<App />
	// 		</MemoryRouter>
	// 	);
	// 	screen.debug();
	// 	const helloWorld2Element = await screen.findByText(/hello world 2/i);
	// 	expect(helloWorld2Element).toBeInTheDocument();
	// 	expect(helloWorld2Element).toHaveStyle({color: 'red'});
	// 	screen.debug();
    // });
    
    test('click event',  () => {
        render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
        const btnElement = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-item')).toBeNull();

        fireEvent.click(btnElement)
        expect(screen.getByTestId('toggle-item')).toBeInTheDocument();

        fireEvent.click(btnElement);
		expect(screen.queryByTestId('toggle-item')).toBeNull();
    });

    test('input event', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		const input = screen.getByPlaceholderText(/input.../i);
		expect(screen.queryByTestId('input-value')).toContainHTML('')
        fireEvent.input(input, {
            target: { value: 'Hello!'}
        })
		expect(screen.queryByTestId('input-value')).toContainHTML('Hello!');

    });
    
    test('input event userEvent', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		const input = screen.getByPlaceholderText(/input.../i);
		expect(screen.queryByTestId('input-value')).toContainHTML('');
		userEvent.type(input, 'Hello2!');
		expect(screen.queryByTestId('input-value')).toContainHTML('Hello2!');
	});
});
