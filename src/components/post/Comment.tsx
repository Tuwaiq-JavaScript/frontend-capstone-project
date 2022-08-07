import { AiOutlineFileGif, AiOutlineSend } from "react-icons/ai";
import { BsPersonCircle, BsEmojiSmile, BsCamera, BsSticky } from "react-icons/bs";

export  function Comments() {
  
  return (
    <>
    <div>
        <div className="post-hr0"></div>
        <div className="create-comment-container">
            <div><BsPersonCircle className="create-comment-icon" size={60} /></div>
            <div className="post-comment-container">
            <input type="text" className="post-comment" placeholder="write a comment..."></input>
            <div className="comment-icons">
              <BsEmojiSmile className="icon-of-comment" size={20}/>
              <BsCamera className="icon-of-comment" size={20}/>
              <AiOutlineFileGif className="icon-of-comment" size={20}/>
              <BsSticky className="icon-of-comment" size={20}/>
              <AiOutlineSend className="icon-of-comment" size={20}/>
            </div>
            </div>
        </div>
    </div> 
    </>
  )
}
