import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage';
import LoginPage from './pages/loginpage';
import { SavedPage } from './pages/saved';
import SignUpPage from './pages/signup';
import {MemoriesPage} from './pages/memories';
import {FriendsPage} from './pages/friends-1';
import { Welcomepage } from './pages/welcomepage';
import EventsPage from './pages/events';
import { CommunityHelpPage } from './pages/communityHelp-1';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='community_help' element={<CommunityHelpPage />} />
      <Route path='saved' element={<SavedPage />} />
      <Route path='signup' element={<SignUpPage />} />
      <Route path='memories' element={<MemoriesPage />} />
      <Route path='friends' element={<FriendsPage />} />
      <Route path='welcome' element={<Welcomepage />} />
      <Route path='events' element={<EventsPage />} />
     </Routes>
  </BrowserRouter>
);
reportWebVitals();
