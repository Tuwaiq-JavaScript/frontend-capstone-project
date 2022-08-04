import { AiOutlinePlus } from "react-icons/ai";

export default function Story() {
  return (
    <div className="create-stroy">
    <div className="story-center">
        <AiOutlinePlus className="plus-icon" size={28}/>
        <div className="stroy-text">
           <h3 className="story-h3">Create story</h3>
           <h5 className="story-h5">Share a photo or write something</h5>
        </div>
    </div>
</div>
  )
}
