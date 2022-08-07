/** @format */

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		setUsers(response.data);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<ul>
			{users.map((user) => {
				return (
					<>
						<Link
							to={`/users/${user.id}`}
							data-testid='user-item'
							key={user.id}>
							{user.name}
						</Link>
						<br />
					</>
				);
			})}
		</ul>
	);
}
