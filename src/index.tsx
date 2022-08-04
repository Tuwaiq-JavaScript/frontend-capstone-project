import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CompanyProfile } from './pages/CompanyProfile';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { Profiles } from './pages/profile';
import './styles/index.css';
import './styles/navbar.css';
import "./styles/chatt.css";
import { Chatt } from './pages/ChattPage';
import { NamePage } from './pages/welcomepage';
import { NotFoundPage } from './pages/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>

		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/sign-up' element={<NamePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/profile' element={<Profiles />} />
				<Route path='/company' element={<CompanyProfile />} />
				<Route path='/chat' element={<Chatt />} />
				<Route path='/*' element={<NotFoundPage />} />

			</Routes>
		</BrowserRouter>
	</>
);
