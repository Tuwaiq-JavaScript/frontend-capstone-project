import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage';
import LoginPage from './pages/loginpage';
import CommunityHelp from './components/CommunityHelp';
import { SavedPage } from './pages/saved';
import Saved from './components/Saved';
import Memories from './components/Memories';
import SignUpPage from './pages/signup';
import {MemoriesPage} from './pages/memories';
import {FriendsPage} from './pages/friends-1';
import EventsPage from './pages/events';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='community_help' element={<CommunityHelp />} />
      <Route path='saved' element={<Saved />} />
      <Route path='memories' element={<Memories />} />
      <Route path='signup' element={<SignUpPage />} />
      <Route path='saved' element={<SavedPage />} />
      <Route path='memories' element={<MemoriesPage />} />
      <Route path='friends' element={<FriendsPage />} />
      <Route path='events' element={<EventsPage />} />
     </Routes>
  </BrowserRouter>
);
reportWebVitals();
