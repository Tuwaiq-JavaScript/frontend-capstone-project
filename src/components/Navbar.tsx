import { Link } from "react-router-dom";
import { BsFacebook, BsMessenger } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";

export function Navbar(){
    return(
       <nav className="navbar">
                                  <div className="div1-navbar">

           			<Link to={'/'}>
                           <div className="logo_main">
                       <BsFacebook id='logo_facebook' size={40} color="#0B88EF"/>
                       </div>
                       </Link>
                       <AiOutlineSearch id='logo_search' size={25} color='#64676B'/>
                       <input id='search_nav' type="text" placeholder='Search Facebook'/>
                       </div>
                       <div className='div2_navbar' >
                           <div className='div_home_nav'>
                           <Link to={''}>
                        <AiOutlineHome id="home_nav" size={30} color="#5F6266"/>
                       </Link>
                       </div>
                       <div className='div_find_friend_nav'>
                       <Link to={''}>
                       <FaUserFriends id="find_friend_nav"size={30} color="#5F6266"/>
                      </Link>
                      </div>
                      <div className='div_groups_nav'>
                      <Link to={''}>
                       <MdGroups id="groups_nav" size={30} color="#5F6266"/>
                       </Link>
                       </div>
                       </div>
                       <div className="div3_navbar">
                            <button id='btn_find_frined_nav'>Find friends</button>
                            <CgMenuGridO id='menu_nav' size={30} color="#000000"/>
                            <BsMessenger id='messenger_nav' size={15} color="#000000"/>
                            <IoMdNotifications id='notifaction_nav' size={30} color="#000000"/>
                            <img id='image_account' src="account.png" alt="" />

                       </div>

       </nav>
    )
}