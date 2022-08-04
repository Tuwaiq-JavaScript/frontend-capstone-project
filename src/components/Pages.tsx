import { AiFillSetting, AiOutlinePieChart } from "react-icons/ai";
import {IoMdCompass, IoMdPersonAdd} from 'react-icons/io'
import {FaThumbsUp} from 'react-icons/fa'


export function Pages() {
	return (
        <div>
            <div className="flex-page-main">
                <div className="first-column-page-flex">
                    <div className="first-row-column">
                        <div>
                            <p className="first-row-column-p">Pages and profiles</p>
                        </div>
                        <div className="icons-friends">
                    <AiFillSetting className="icon-background-page" size={30}/>
                    </div>
                    </div>
                    <div>
                        <button className="create-page-button">+ Create a new page</button>
                    </div>
                    <div className="line-pages"></div>
                    <div className="icons-row-align">
                    <AiOutlinePieChart className="icon-background-page" size={30}/> Meta Bussines Suite
                    </div>
                    <div className="icons-row-align">
                    <IoMdCompass className="icon-background-page" size={30}/> Discover
                    </div>
                    <div className="icons-row-align">
                    <FaThumbsUp className="icon-background-page" size={30}/> Liked Pages
                    </div>
                    <div className="icons-row-align">
                    <IoMdPersonAdd className="icon-background-page" size={30}/> Meta Bussines Suite
                    </div>
                </div>
            </div>
        </div>
    )}