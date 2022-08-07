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
		name: 'John Doe',
		bio: 'Full Stack Developer',
		message: 'hi im the messag ',
		imageUrl: '',
		videoUrl: '',
		likes: [],
	},
	{
		id: '2',
		avatarUrl: 'https://i.pravatar.cc/300?img=2',
		name: 'John Doe',
		bio: 'Full Stack Developer',
		message: 'hi im the message componennt im heeeerrrrre ',
		imageUrl: 'https://i.pravatar.cc/300',
		videoUrl: '',
		likes: [],
	},
];
