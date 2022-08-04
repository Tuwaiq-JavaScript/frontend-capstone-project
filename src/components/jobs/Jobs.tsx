import { recommendeds } from '../../data/jobs/job';
import { Recommended } from './Job';

export function Recommendeds() {
	const recommendedsDivs = recommendeds.map((recommended) => <Recommended recommended={recommended} />);

	return (
		<div className='posts' id=''>
			{recommendedsDivs}
		</div>
	);
}