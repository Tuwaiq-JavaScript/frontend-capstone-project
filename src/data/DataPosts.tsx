interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
	description: string;
	title: string;
	imageUrl: string;
	date: Date;
	likeCount: number;
	comments: IComment[];
	username: string;
	userAvatarUrl: string;
} 
export const posts: IPost[] = [
    {
        id: '1',
		username: 'omar alwahiby',
		title: 'The picturesque garden is located in the middle of Raghadan Forest Park | https://arab.news/8kj6z',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likeCount: 0,
		comments: [],
    },
	{
        id: '1',
		username: 'omar alwahiby',
		title: 'The picturesque garden is located in the middle of Raghadan Forest Park | https://arab.news/8kj6z',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likeCount: 0,
		comments: [],
    },
	{
        id: '1',
		username: 'omar alwahiby',
		title: 'The picturesque garden is located in the middle of Raghadan Forest Park | https://arab.news/8kj6z',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likeCount: 0,
		comments: [],
    },
]