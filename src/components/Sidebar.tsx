import React from 'react'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from '@mui/icons-material/Home';
import  Header  from "../components/Header";
import SidebarRow from '../components/SidebarRow';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "../styles/index.css"

export function Sidebar()
{
    return(
        <>
        <Header/>

        
        {/* <div className="Sidebar"> */}
        {/* <h1>this is sidebar </h1>  */}
        <div className="Sidebar">
     
     <SidebarRow  selected Icon={HomeIcon} title="Home" />
     <SidebarRow  Icon={WhatshotIcon} title="Trending" />
     <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
     <SidebarRow  Icon={LibraryAddIcon} title="Library" />
     <hr />
     <SidebarRow  Icon={LibraryAddIcon} title="Library" />
     <SidebarRow  Icon={OndemandVideoIcon} title="Your videos" />
     <SidebarRow  Icon={WatchLaterIcon} title="Watch Later" />
     <SidebarRow  Icon={ThumbUpAltIcon} title="Liked videos" />
            <SidebarRow  Icon={ExpandMoreIcon} title="Show more" />
            <hr />
    
 </div>
    


 {/* </div> */}
        </>
        
    )
}