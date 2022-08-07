import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { Comment } from '@prisma/client';
interface CommentProps {
	comment: Comment;
}
export  function AddComment({ comment }: CommentProps) {
  
  return (
    <div className="write-comment-container">
                    <div><BsPersonCircle className="add-comment-icon" size={43} /></div>
                    <div className="comment-posts-container">
                        <div className="comment-per-comm-container">
                          <div className='comment-clo-name-com'>
                            <div className="comment-user-name">{comment.username}</div>
                            <div className="comment-text-comment"><p>{comment.content}</p></div>
                          </div>
                          <AiOutlineCloseCircle className='comment-close-icon' size={25} />
                        </div>
                    </div>
                   </div>
  )
}
