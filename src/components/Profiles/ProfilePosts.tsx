import { usePosts } from '../../state';
import { Post } from '../Home/Post';

export function ProfilePosts() {
    // const posts = usePosts();
    let UsersData = JSON.parse(localStorage.getItem('Profile') || "[]");
    console.log(UsersData.posts);
    
    const postsDivs = UsersData?.posts?.map((post : any) => <Post key={post.id} post={post} />);

    return (
        <div className='posts' id=''>
            {postsDivs}
        </div>
    );
}
