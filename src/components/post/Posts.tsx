import { AddPost } from "./AddPost";
import { usePosts } from '../../state';
export default function Posts() {
  const posts = usePosts();
  const Posts = posts.map((post) => <AddPost post={post} />);
  return (
    <div className='posts' id=''>
			{Posts}
		</div>
  )
}

