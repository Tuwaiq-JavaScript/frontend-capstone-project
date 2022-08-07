import { networks } from '../../data/network/network';
import { Network } from './Network';

export function Networks() {
	const networksDivs = networks.map((network) => <Network network={network} />);

	return (
		<div className='posts-jobs-card' id=''>
			{networksDivs}
		</div>
	);
}