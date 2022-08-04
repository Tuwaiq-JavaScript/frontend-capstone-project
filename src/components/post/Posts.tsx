import { posts } from "../../data/DataPosts";
import { AddPost } from "./AddPost";
export default function Posts() {
  const Posts = posts.map((post) => <AddPost post={post} />);
  return (
    <div className='posts' id=''>
			{Posts}
		</div>
  )
}

