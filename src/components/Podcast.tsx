import { Link } from "react-router-dom";
import { IPost } from "../data";



interface PostProps {
	post: IPost;
}

export function Podcast({ post }: PostProps) {
	return (
   
  
  
         
    <Link to={`/content/${post.id}`}>
    <div className="card">
    <img src={post.imageUrl}  className="cast-image" alt='jj' />
      <p>{post.title}</p>
    </div>
 
</Link>


  );}