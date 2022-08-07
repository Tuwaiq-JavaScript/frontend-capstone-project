import { Networks } from '../components/MyNetwork/Networks';
import { Sidenet } from '../components/MyNetwork/Sidenet';
import { Nav } from '../components/Nav';

export function MyNetworkPage() {
	return (
		<>
		    < Nav />
            < Sidenet />
			<Networks />
		</>
	);
}
