import { useState } from "react";
import { AiOutlineFileGif, AiOutlineSend } from "react-icons/ai";
import { BsPersonCircle, BsEmojiSmile, BsCamera, BsSticky } from "react-icons/bs";
import { AddComment } from "./AddComment";

export  function Comment() {
  const [addComment, setAddComment] = useState(false)
  const showAddComment = () => {
      setAddComment(true)
  }
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
              <AiOutlineSend onClick={showAddComment} className="icon-of-comment" size={20}/>
            </div>
            </div>
        </div>
        {addComment&&<AddComment  />}
    </div> 
    </>
  )
}
