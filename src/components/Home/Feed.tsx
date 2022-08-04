import { FcCalendar, FcVideoFile } from 'react-icons/fc';
import { FcStackOfPhotos } from 'react-icons/fc';
import { MdAddPhotoAlternate, MdArticle, MdEvent, MdVideoLibrary } from 'react-icons/md';
export function Feed() {
	return (
		<>
			<div className='body__main'>
				<div className='feed'>
					<div className='feed__inputContainer'>
						<div className='contain-search-img'>
							<img className='img-reeserch-head' src="https://media-exp1.licdn.com/dms/image/D4D35AQEas4EsfKUZxQ/profile-framedphoto-shrink_100_100/0/1624947890919?e=1660219200&v=beta&t=8f3hXhPad2hNRh_hTl-UoxwXIiWlV0cjTEgCzxwnr5I" alt="" />

							<div className='feed__input'>
								<i className='material-icons'> create </i>
								<form>
									<input type='text' />
									<button type='submit'>Send</button>
								</form>
							</div>
						</div>

						<div className='feed__inputOptions'>
							<div className='inputOption'>
								<FcStackOfPhotos size={30} />

								<h4>Photo</h4>

							</div>
							<div className='inputOption'>
								<FcVideoFile size={30} />
								<h4>Video</h4>
							</div>
							<div className='inputOption'>
								<FcCalendar size={30} />
								<h4 className='txt-imgs'>Event</h4>
							</div>
							<div className='inputOption'>
								<MdArticle size={30} />
								<h4>Write Article</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
