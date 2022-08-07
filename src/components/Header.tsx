import '../styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {Outlet} from 'react-router-dom'

export default function Header(props :any) {
        return (<>
  <div className='Header'>
        <div className='header-left'>
        <MenuIcon/>
        <img 
        className='header-logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
         alt="" />

        </div>

       <div className='header-input'>
        <input type="text" />
        <SearchIcon/>
        </div> 

        <div className='header-icons'>
            <VideoCallIcon/>
            <AppsIcon/>
            <NotificationsIcon/>
            <Avatar src="https://yt3.ggpht.com/ytc/AMLnZu_EIz7QJ1velKgAlMOnNG-QzIMcUN57oExE6KRG=s176-c-k-c0x00ffffff-no-rj" />   
        </div>
    </div>
    <div >
      <Outlet/>
    </div>
    </>
  )
}

