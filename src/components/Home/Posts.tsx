import { usePosts } from '../../state';
import { Post } from './Post';

export function Posts() {
	const posts = usePosts();

	const postsDivs = posts.map((post) => <Post key={post.id} post={post} />);

	return (
		<div className='posts' id=''>
			{postsDivs}
		</div>
	);
}
