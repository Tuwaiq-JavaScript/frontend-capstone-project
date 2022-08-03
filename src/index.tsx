import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { CompanyProfile } from './pages/CompanyProfile';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { Profiles } from './pages/profile';
import { store } from './state';
import './styles/index.css';
import './styles/navbar.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/sign-up' element={<LoginPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/profile' element={<Profiles />} />
					<Route path='/company' element={<CompanyProfile />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</>
);
