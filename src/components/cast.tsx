import { posts } from '../data';
import { Podcast} from './Podcast';

export function Posts() {
	const postsDivs = posts.map((post) => <Podcast post={post} />);

	return (
		<><div>
	<h2 className='topic'> 🎙️ ..بودكاست يتحدث عنك حيناً .. ويتحدث معك أحياناً </h2>
	</div>
	
	<div className='cast' id=''>
			{postsDivs}
		</div></>
	);
}