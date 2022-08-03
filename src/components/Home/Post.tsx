import { AiFillLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BiSend } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import { IPost, initialPosts } from '../../data/post/postdata';
import { useState } from 'react';
import { updatePost, useUserId } from '../../state';
import { useDispatch } from 'react-redux';
import { FiHeart } from 'react-icons/fi';

interface PostProps {
	post: IPost;
}
export function PostPage() {
	const postDivs = initialPosts.map((post: IPost) => <Post post={post} />);

	return <>{postDivs};</>;
}

export function Post({ post }: PostProps) {
	const userId = useUserId() ?? '';
	const isLiked = post.likes.includes(userId);
	const heartIconClasses = isLiked ? 'icon heart liked' : 'icon heart';
	const dispatch = useDispatch();

	function toggleLike() {
		if (isLiked) {
			const action = updatePost({
				...post,
				likes: post.likes.filter((id: any) => id !== userId),
			});
			dispatch(action);
		} else {
			console.log('liking');
			const action = updatePost({
				...post,
				likes: [...post.likes, userId],
			});
			dispatch(action);
		}
	}
	return (
		<>
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
						<FiHeart onClick={toggleLike} className={heartIconClasses} size={40} />
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
		</>
	);
}
