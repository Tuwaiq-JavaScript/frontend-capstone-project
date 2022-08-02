import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { HomePage } from './pages/HomePage';
import Header from './components/Header';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  
      <BrowserRouter>
   <Routes>
   <Route element={<Header/>} >
     <Route path="/" element={<HomePage /> } />
     <Route path="/profile" element={<ProfilePage />} />
    </Route>
  
     <Route path="/login" element={<LoginPage />} />
   
    </Routes>

    
    </BrowserRouter>
   


 
 
);

