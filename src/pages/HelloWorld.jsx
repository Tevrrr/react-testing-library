/** @format */

import { useState } from 'react';

const HelloWorld = () => {
	const [value, setValue] = useState('');
	const [visible, setVisible] = useState(false);
	const toggle = () => {
		value === 'hello' && setVisible(!visible);
	};
	const longToggle = () => {
		setTimeout(() => value === 'hello' && setVisible(!visible), 1000);
	};
	const onChange = (e) => setValue(e.target.value);
	return (
		<div>
			<input onChange={onChange} type='text' id='search' />
			<button onClick={toggle} id='toggle'>
				HELLO WORLD
			</button>
			<button onClick={longToggle} id='longToggle'>
				LONG HELLO WORLD
			</button>
			{visible && (
				<h1 onClick={() => setVisible(!visible)} id='hello'>
					Hello World!
				</h1>
			)}
		</div>
	);
};

export default HelloWorld;
