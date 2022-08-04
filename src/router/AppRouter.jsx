import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';
import UserPage from '../pages/UserPage';

export default function AppRouter() {
  return (
		<Routes>
			<Route path='Main' element={<MainPage />} />
			<Route path='About' element={<AboutPage />} />
			<Route path='/users/:id' element={<UserPage />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
  );
}
