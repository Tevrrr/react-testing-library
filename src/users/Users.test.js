/** @format */

import { render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import AppRouter from '../router/AppRouter';

jest.mock('axios');

describe('user test', () => {
	let response;
	beforeEach(() => {
		response = {
			data: [
				{
					id: 1,
					name: 'Leanne Graham',
				},
				{
					id: 2,
					name: 'Ervin Howell',
					username: 'Antonette',
				},
				{
					id: 3,
					name: 'Clementine Bauch',
				},
			],
		};
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	test('render users', async () => {
		axios.get.mockReturnValue(response);
		render(
			<MemoryRouter>
				<Users />
			</MemoryRouter>
		);
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);
		expect(axios.get).toBeCalledTimes(1);
		// screen.debug()
	});

	test('test click users', async () => {
		axios.get.mockReturnValue(response);
		render(
			<MemoryRouter>
				<Users />
				<AppRouter />
			</MemoryRouter>
		);

		const users = await screen.findAllByTestId('user-item');

		expect(users.length).toBe(3);
		expect(axios.get).toBeCalledTimes(1);
		screen.debug();
		userEvent.click(users[1]);
		screen.debug();
		// expect(screen.getByTestId('user-page')).toBeInTheDocument();
	});
});
