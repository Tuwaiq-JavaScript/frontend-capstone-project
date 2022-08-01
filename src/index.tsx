import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import {Header} from './components/Header'
import {Sidebar} from './components/Sidebar'
import {Login} from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeaderPage } from './pages/HeaderPage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  
      <BrowserRouter>
   <Routes>
     
     <Route path="/" element={<HeaderPage />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/profile" element={<ProfilePage />} />
     
   
    </Routes>

    
    </BrowserRouter>
   


 
 
);

