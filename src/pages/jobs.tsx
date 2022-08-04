import {Recommendeds} from '../components/jobs/Jobs'
import { Sidebar } from '../components/jobs/Sidebar';
import { Nav } from '../components/Nav';


export function JobsPage() {
	return (
		<>
		<div>
                < Nav />
				<Sidebar />
				<Recommendeds />
		</div>
		</>
	);
}