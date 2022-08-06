import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'

export  function AddComment() {
  
  return (
    <div className="write-comment-container">
                    <div><BsPersonCircle className="add-comment-icon" size={43} /></div>
                    <div className="comment-posts-container">
                        <div className="comment-per-comm-container">
                          <div className='comment-clo-name-com'>
                            <div className="comment-user-name">Omar Alwahiby</div>
                            <div className="comment-text-comment"><p>gg</p></div>
                          </div>
                          <AiOutlineCloseCircle className='comment-close-icon' size={25} />
                        </div>
                    </div>
                   </div>
  )
}
