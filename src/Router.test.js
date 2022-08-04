import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from "./App"


describe('Router test', () => {
    test('about/main click', () => {
		render(<MemoryRouter><App/></MemoryRouter>);
		const mainLink = screen.getByTestId('main-link');
		const aboutLink = screen.getByTestId('about-link');
		userEvent.click(aboutLink);
		expect(screen.getByTestId('about-page')).toBeInTheDocument();
		userEvent.click(mainLink);
		expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
    test('error page test', () => {
		render(
			<MemoryRouter initialEntries={['/sfsdfhfd']}>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByTestId('error-page')).toBeInTheDocument();
	});
})