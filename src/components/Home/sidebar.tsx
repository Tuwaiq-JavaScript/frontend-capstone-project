import { initialPosts } from '../../data/post/postdata';

export function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					className='sidebar-img'
					src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080'
					alt=''
				/>
				<img
					className='avatar-sidebar'
					src='https://media-exp1.licdn.com/dms/image/D4D35AQEas4EsfKUZxQ/profile-framedphoto-shrink_100_100/0/1624947890919?e=1660219200&v=beta&t=8f3hXhPad2hNRh_hTl-UoxwXIiWlV0cjTEgCzxwnr5I'
					alt=''
				/>
				<h2>Essa</h2>
				<h4>Esaa@gmail.com</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who Viewed You</p>
					<p className='sidebar__statNumber'>2,453</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>2,650</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>reactjs</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>programming</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>softwareengineering</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>design</p>
				</div>
				<div className='sidebar__recentItem'>
					<span className='sidebar__hash'>#</span>
					<p>developer</p>
				</div>
			</div>
		</div>
	);
}
