import { AiFillCheckCircle, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsCalendar2Plus, BsCalendar2PlusFill } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";

import { ILatest_Post, posts } from "../data";
import { GiEarthAmerica } from "react-icons/gi";
import { FaShare } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

interface CovidPost{
    post_covid: ILatest_Post;
}
export function Covid({post_covid}:CovidPost){
    return(
        <>
        <div className='main_covid'>
            <div className='information_covid'>
                <div className='information1_covid'>
                    <h1 id='title_covid'>COVID-19 Information Centre</h1>
                    <p id='description_covid'>Follow for updates and notifications.</p>
                </div>
                <div className='information2_covid'>
                    <div className='folllow_covid'>
                    <button id='btn_follow_covid'><BsCalendar2PlusFill  size={17} color='#FFFFFF'/>  Follow</button>
                    </div>
                    <div className='share'>
                    <IoIosShareAlt id='logo_share' size={30} color='#1C1D21'/>
                    </div>
                </div>
            </div>
            <div className='body_covid_page'>
            <div className='latest_post_covid'>
                <div className='title_descrip_latest_post'>
                    <h2 id='title_latest_post_covid'>Latest post</h2>
                    <p id='description_latest_post_covid'>Information about COVID-19 from government, civic, health and other Pages.</p>
                    <div className='background_post_health_organztion'>
                    <div className='post_health_organztion'>
                        <div className='title_post_health_organztion'>
                            {/* update image from data */}
                            <img id='img_world_health' src={post_covid.userAvatarUrl} alt="" />  
                            <h4>{post_covid.username} <AiFillCheckCircle size={15} color='#1A71E9'/></h4>  
                            <FiMoreHorizontal id='morehorzontal' size={30} color='#5F6266'/>
                        </div>
                    </div>
                    <p id='history_post'> {post_covid.date} <GiEarthAmerica/></p>
                    <div className='description_post_health_organztion'>
                       <p><span className='color_covid'>#COVID </span><span>{post_covid.text}</span><span className='color_covid'> #COVID</span></p>
                    </div>
                    <div>
                        <img id='img_daily_update' src={post_covid.imageUrl} alt="" />
                    </div>
                    <span className='line_post_health_organztion'></span>

                    <div className='like_and_share_post_covid'>
                    <div className='background_like_covid'>
                        <div className='like_and_count_post_covid'>
                    <AiFillLike id='like_post_covid' size={17} color='#FFFFFF' cursor='pointer'/>
                    </div>
                    </div>
                    <div>
                    <p id='likecount_covid'>{post_covid.likeCount}</p>
                    </div>
                    
                    <div className='share_post_covid'>
                        <div><p>{post_covid.shareCount}</p></div>
                        <div>       <p>share</p></div>
                        </div>
                    </div>
                    <span className='line_post_health_organztion2'></span>
                        <div className='press_like_or_share'>
                            <div className='press_like'>
                                <div className='logo_press_like'><AiOutlineLike size={25} color='#5F6266'/></div>
                                <div><p>Like</p></div>
                            </div>
                            <div className='press_share'>
                                <div className='logo_press_share'><RiShareForwardLine size={25} color='#5F6266'/></div>
                                <div>Share</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='health_organisations_covid'>
                <div className='title_health_organisations'>
                    <h2>Leading health organisations</h2>
                </div>
                {/* complete here */}
            </div>
            </div>
        </div>
        </>
    )
}








export function Post_covid() {
	const postsDivs = posts.map((post_covid) => <Covid post_covid={post_covid} />);

	return (
		<div className='posts' id=''>
			{postsDivs}
		</div>
	);
}