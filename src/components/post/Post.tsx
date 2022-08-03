import { IPost } from "../../data/DataPosts";
import CreatePost from "./CreatePost";

import Story from "./Story";
import WritePost from "./WritePost";
interface PostProps {
	post: IPost;
}

export  function Post({ post }: PostProps) {
	return (
        <>
       <Story />
       <CreatePost /> 
       <WritePost />
            <div className='post'>
			
            </div>
        </>
    );
}