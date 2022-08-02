import { AiFillSetting } from "react-icons/ai";
import { BsCalendarDateFill, BsFillPeopleFill } from "react-icons/bs";
import { IoIosHome ,IoMdPersonAdd } from "react-icons/io";
import { TbFriends } from "react-icons/tb";
import {FaUserFriends ,FaListUl} from "react-icons/fa"
import {GiThreeFriends} from "react-icons/gi"
import {FaBirthdayCake} from "react-icons/fa"
import { Layout } from "./Layout";




export default function Friends() {
	return (
        
        <div>
        <div className="flex-main-frinds">
            <div className="first-flex-friends">
                <div className="first-row-left-friends">
                <p>Friends</p>
          <AiFillSetting size={30} />
                </div>
                <div className="friends-notification-left">
                    <div className="icons-friends">
                    < IoIosHome className="icon-background-friends" size={30}/> Home
                    </div>
                    <div className="icons-friends">
                    <FaUserFriends className="icon-background-friends2" size={30}/> Friends Requests
                    </div>
                    <div className="icons-friends">
                    <IoMdPersonAdd className="icon-background-friends2" size={30}/> Suggestions
                    </div>
                    <div className="icons-friends">
                    <GiThreeFriends className="icon-background-friends2" size={30}/> All friends
                    </div>
                    <div className="icons-friends">
                    <FaBirthdayCake className="icon-background-friends2" size={30}/> Birthdays
                    </div>
                    <div className="icons-friends">
                    <FaListUl className="icon-background-friends2" size={30}/> Custom list
                    </div>
                </div>
            </div>
            <div className="second-main-flex-friends">
                <FaUserFriends  size={100} />
                <p>When you have friend requests or suggestions, you'll see them here.</p>
            </div>
        </div>
      </div>
      
    )}