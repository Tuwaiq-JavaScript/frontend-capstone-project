import { Feed } from './Feed';
import { Post, PostPage } from './Post';
import { RightSide } from './RightSide';
import { Sidebar } from './sidebar';
import '../../styles/home.css';

export function Home() {
	return (
		<div className='body__main-cont'>
			<div className='body__main'>
				<Sidebar />
				<div className='body__main__feed'>
					<Feed />
					<PostPage />
				</div>
				<RightSide />
			</div>
		</div>
	);
}
