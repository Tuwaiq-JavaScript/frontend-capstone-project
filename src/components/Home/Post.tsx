import { AiFillLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BiSend } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import { IPost, posts } from '../../data/post/postdata';

export function PostPage() {
	const postDivs = posts.map((post: IPost) => <Post post={post} />);

	return <>{postDivs};</>;
}

interface PostProps {
	post: IPost;
}

export function Post({ post }: PostProps) {
	return (
		<div className='post'>
			<div className='post__header'>
				<img className='avatar-post' src={post.avatarUrl} alt='' />

				<div className='post__info'>
					<h2>{post.name}</h2>
					<p>{post.bio}</p>
				</div>
			</div>

			<div className='post__body'>
				<p>{post.message}</p>
			</div>

			<div className='feed__inputOptions'>
				<div className='inputOption'>
					<AiFillLike />
					<h4>Like</h4>
				</div>
				<div className='inputOption'>
					<BiCommentDetail />
					<h4>Comment</h4>
				</div>
				<div className='inputOption'>
					<BiSend />
					<h4>Share</h4>
				</div>
				<div className='inputOption'>
					<AiOutlineSend />
					<h4>Send</h4>
				</div>
			</div>
		</div>
	);
}
