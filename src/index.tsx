import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CompanyProfile } from './pages/CompanyProfile';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { Profiles } from './pages/profile';
import { MyNetworkPage } from './pages/network';


import './styles/index.css';
import './styles/navbar.css';
import './styles/chatt.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Chatt } from './pages/ChattPage';
import { PersistGate } from 'redux-persist/integration/react';

import { NotFoundPage } from './pages/NotFoundPage';
import { persistor, store } from './state';
import { JobsPage } from './pages/jobs';
import { LandingPage } from './pages/landing';
import { SignUpPage } from './pages/signup';
import { ApplyjobPage } from './pages/applyjob';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route path='/home' element={<HomePage />} />
						<Route path='/sign-up' element={<SignUpPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/profile' element={<Profiles />} />
						<Route path='/company' element={<CompanyProfile />} />
						<Route path='/chat' element={<Chatt />} />
						<Route path='/jobs' element={<JobsPage />} />
						<Route path='/applyjob' element={<ApplyjobPage />} />
						<Route path='/network' element={<MyNetworkPage />} />
						<Route path='/*' element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</>
);
