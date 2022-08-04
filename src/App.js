/** @format */

import { useState, useEffect } from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import AppRouter from './router/AppRouter';

import Users from './users/Users';

function App() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [value, setValue] = useState('');
	const onClick = () => {
		setToggle(!toggle);
	};

	useEffect(() => {
		setTimeout(() => {
			setData('Hello World 2');
		}, 1000);
	}, []);

	return (
		<div className='App'>
			<h1>Hello World</h1>
			{data && <h2 style={{ color: 'red' }}>{data}</h2>}
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type='text'
				placeholder='input...'
			/>
			<p data-testid='input-value'>{value}</p>
			<button data-testid='toggle-btn' onClick={onClick}>
				{' '}
				BUTTON
			</button>
			{toggle && <h3 data-testid='toggle-item'>Hello World 3</h3>}
			<Users />
			<p>
				<Link data-testid='main-link' to={'Main'}>
					Main
				</Link>{' '}
				<Link data-testid='about-link' to={'About'}>
					About
				</Link>
			</p>

			<AppRouter/>
		</div>
	);
}

export default App;
