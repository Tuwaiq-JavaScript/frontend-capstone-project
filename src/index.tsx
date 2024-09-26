import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
// import {Header} from './components/Header'
// import {Sidebar} from './components/Sidebar'
import {Login} from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HeaderPage } from './pages/HeaderPage';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import {  SidebarPage } from "./pages/SidebarPage";
import { Sidebar } from './components/Sidebar';
import Header  from './components/Header';


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
     {/* <Sidebar/>    */}

     {/* <Route path="/" element={<HeaderPage />} /> */}
     <Route path="/login" element={<LoginPage />} />
     <Route path="/profile" element={<ProfilePage />} />
     <Route path="/sidebar" element={<SidebarPage />} />

     {/* <Route element={<Header/>}>
     </Route> */}

     
   
    </Routes>

    
    </BrowserRouter>
   


 
 
);

