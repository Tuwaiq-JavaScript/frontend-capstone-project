import { Link } from "react-router-dom";
import CreatePost from "./post/CreatePost";
import Story from "./post/Story";

export function MostRecent(){
    return(
        <>
        <div className='main_most_recent_story'>
        <div className='Most_Recent_story'>
        < Story/>
        <span className='line_most_Recent_create_post'></span>
        </div>

        <div className='most_recent'>
            <div className='title_most_recent'><p>Most resent</p></div>
            <div className=''>
                <Link to={"/"}>
                    <p id='link_back_home'>Back to top post</p>
                </Link>
            </div>
        </div>
        <div className='Most_Recent_create_post'>
        <CreatePost togglePost={function (): void {
                        throw new Error("Function not implemented.");
                    } }  />

        </div>
        <div className='no_more_post'>
            <div>            <p id ='no_more_post'> No more posts</p></div>
            <div>            <p id='add_more'>Add more friends to see more posts in your Feed.</p></div>
            <button id='btn_find_friend'>Find friends </button>
        </div>
        
        </div>
        </>
    )
}