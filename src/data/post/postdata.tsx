export interface IPost {
	id: string;
	avatarUrl: string;
	name: string;
	bio: string;
	likes: string[];
	message: string;
	imageUrl: string;
	videoUrl: string;
}
export const initialPosts: IPost[] = [
	{
		id: '1',
		avatarUrl: 'https://i.pravatar.cc/300?img=1',
		name: 'Mohanad Al-Safadi',
		bio: 'Cyber security expert',
		message: 'hi im the messag ',
		imageUrl: '',
		videoUrl: '',
		likes: [],
	},
];
