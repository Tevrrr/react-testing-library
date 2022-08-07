/** @format */

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';

export default function renderWithRedux(component, initialState) {
	const store = createReduxStore(initialState);
	return render(<Provider store={store}>{component}</Provider>);
}
