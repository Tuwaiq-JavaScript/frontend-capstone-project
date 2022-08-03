import logo from '../photo/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import { Outlet } from 'react-router';
// import Sidebar  from './Sidebar';
// import Profile  from './Profile';


export default function Header()
{
    return(
        <>
        {/* <h1>headr </h1> */}
        
        <header className="header">
        <MenuIcon/>
        <img src={logo} alt="YouTube Logo" className="youtube-logo" width="89px" height="24px" />
         
  
      {/* <img src="logo.png" alt="YouTube Logo" className="youtube-logo" /> */}
    
    <form className="search-bar">
      <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
      <button type="submit" className="search-btn">
        
        <SearchSharpIcon/>
      </button>
    </form>
    <div className="menu-icons">
   
      <VideoCallSharpIcon/>
      <AppsSharpIcon/>
      <NotificationsNoneSharpIcon/>
      <a href="#">
        <img className="menu-channel-icon" src="http:///unsplash.it/36/36?gravity=center" alt="Your Channel" />
      </a>
    </div>
  </header>
 <Outlet/>
        </>
    )
}
