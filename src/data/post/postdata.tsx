export interface IPost {
	id: string;
	avatarUrl: string;
	name: string;
	bio: string;
	message: string;
	imageUrl: string;
	videoUrl: string;
}
export const posts: IPost[] = [
	{
		id: '1',
		avatarUrl: 'https://i.pravatar.cc/300',
		name: 'John Doe',
		bio: 'Full Stack Developer',
		message: 'hi im the message componennt im heeeerrrrre ',
		imageUrl: 'https://i.pravatar.cc/300',
		videoUrl: '',
	},
	{
		id: '2',
		avatarUrl: 'https://i.pravatar.cc/300',
		name: 'John Doe',
		bio: 'Full Stack Developer',
		message: 'hi im the message componennt im heeeerrrrre ',
		imageUrl: 'https://i.pravatar.cc/300',
		videoUrl: '',
	},
];
