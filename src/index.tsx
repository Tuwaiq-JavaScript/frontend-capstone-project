import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import { LoginPage } from './pages/login';
import { HomePage } from './pages/home';
import { SignupPage } from './pages/signup';
import { LandingPage } from './pages/landing';




import './styles/index.css';
import './styles/login.css';
import './styles/signup.css';





const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>

	<BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
	  <Route path="/login" element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignupPage/>} />
	  <Route path="/profile" element={<LoginPage/>}/>
	  <Route path="/company" element={<LoginPage/>}/>
	  
    </Routes>
  </BrowserRouter>
	</>
);
