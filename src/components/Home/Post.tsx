import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { BiCommentDetail, BiLike } from 'react-icons/bi';
import { BiSend } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';
import { IPost, initialPosts } from '../../data/post/postdata';
import { addComment, addPost, updatePost, usePostComments, usePosts, useUserId } from '../../state';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'react-modal';
//style for the modal

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};
Modal.setAppElement('#root');

interface PostProps {
	post: IPost;
}
export function PostPage() {
	const post = usePosts();

	const postDivs = post.map((post: IPost) => <Post post={post} />);

	return <>{postDivs}</>;
}

export function Post({ post }: PostProps) {
	const userId = useUserId() ?? '';
	const isLiked = post.likes.includes(userId);
	const heartIconClasses = isLiked ? 'heart liked' : '';
	const dispatch = useDispatch();

	const comments = usePostComments(post.id);
	const commentsComponents = comments.map((comment) => <CommentComp key={comment.id} comment={comment} />);

	const [modalIsOpen, setModelIsOpen] = useState(false);
	const [comment, setComment] = useState('');

	function closeModal() {
		setModelIsOpen(false);
	}

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
	function openAddCommnetModal() {
		setModelIsOpen(true);
	}

	function sendComment() {
		const content = comment; // the thing inside input
		if (!content) return;

		const action = addComment({
			content,
			postId: post.id,
			id: new Date() + '',
			username: 'Essa',
		});
		dispatch(action);

		setComment('');
		setModelIsOpen(false);
	}

	function handleKeyDown(event: any) {
		if (event.key === 'Enter') {
			sendComment();
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
					<div onClick={toggleLike} className='inputOption'>
						<AiFillLike id='like' className={heartIconClasses} size={20} />

						<h4>Like</h4>
					</div>
					<div onClick={openAddCommnetModal} className='inputOption'>
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
				<div className='comment-cont'>{commentsComponents}</div>
				{/* This code is for the model */}
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Example Modal'
				>
					<div>Type your comment here</div>
					<input
						onKeyDown={handleKeyDown}
						value={comment}
						onChange={(event) => setComment(event.target.value)}
						type='text'
					/>
					<BiSend onClick={sendComment} className='icon' size={20} />
				</Modal>
			</div>
		</>
	);
}
export interface IComment {
	id: string;
	content: string;
	username: string;
	postId: string;
}
interface CommentProps {
	comment: IComment;
}

function CommentComp({ comment }: CommentProps) {
	return (
		<div className='comment-container'>
			<h2 className='username'>{comment.username}</h2>
			<div className='content'>{comment.content}</div>
		</div>
	);
}
