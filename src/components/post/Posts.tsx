import { posts } from "../../data/DataPosts";
import { Post } from "./Post";
export default function Posts() {
  const Posts = posts.map((post) => <Post post={post} />);
  return (
    <div className='posts' id=''>
			{Posts}
		</div>
  )
}

