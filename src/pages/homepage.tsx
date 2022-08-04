import { Layout } from '../components/Layout';
import { Post } from '../components/post/Post';
import Posts from '../components/post/Posts';
import Sidebar from '../components/Sidebar';
export function HomePage() {
	
	return (
		<Layout>
			<>
			<div className='p-center'>

			   <Sidebar />
			<div className='home-container'>
			   <Post />
			   <Posts />
			</div>
			</div>
			</>
		</Layout>
	);
}
