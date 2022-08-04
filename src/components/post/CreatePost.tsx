import { BsPersonCircle, BsCameraVideo } from "react-icons/bs";
import { BiPhotoAlbum } from "react-icons/bi";
import { CgSmileMouthOpen } from "react-icons/cg";

export default function CreatePost() {
    const writePost = document.getElementsByClassName('write-post-body')
    const OpenwritePost = document.getElementsByClassName('post-input-container')
  return (
    <div className="create-post">
            <div className="create-post-input">
            <BsPersonCircle className="create-post-icon" size={60} />
            <div className="post-input-container">
            <div className="post-main">What's your mind, Omar?</div>
            </div>
            </div>
            <div className="post-hr3"/>
            <div className="crete-post-menu">
                <div className="create-post-display-icon">
                    <BsCameraVideo className="post-video-icon" size={40}/>
                    <p>Live video</p>
                </div>
                <div className="create-post-display-icon">
                    <BiPhotoAlbum className="post-photo-icon" size={40}/>
                    <p>Photo/video</p>
                </div>
                <div className="create-post-display-icon">
                    <CgSmileMouthOpen className="post-feeling-icons" size={40}/>
                    <p>Feeling/activity</p>
                </div>
            </div>
        </div>
  )
}
