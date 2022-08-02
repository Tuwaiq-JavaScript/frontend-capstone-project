import { MdAddPhotoAlternate, MdArticle, MdEvent, MdVideoLibrary } from 'react-icons/md';
export function Feed() {
	return (
		<>
			<div className='body__main'>
				<div className='feed'>
					<div className='feed__inputContainer'>
						<div className='feed__input'>
							<i className='material-icons'> create </i>
							<form>
								<input type='text' />
								<button type='submit'>Send</button>
							</form>
						</div>

						<div className='feed__inputOptions'>
							<div className='inputOption'>
								<MdAddPhotoAlternate />
								<h4>Photo</h4>
							</div>
							<div className='inputOption'>
								<MdVideoLibrary />
								<h4>Video</h4>
							</div>
							<div className='inputOption'>
								<MdEvent />
								<h4>Event</h4>
							</div>
							<div className='inputOption'>
								<MdArticle />
								<h4>Write Article</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
