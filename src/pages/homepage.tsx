import { Layout } from '../components/Layout';
import Posts from '../components/post/Posts';
import Sidebar from '../components/Sidebar';
export function HomePage() {
	return (
		<Layout>
			<>
			<div className='home-container'>
			   <Sidebar />
			   <Posts />
			</div>
			</>
		</Layout>
	);
}
