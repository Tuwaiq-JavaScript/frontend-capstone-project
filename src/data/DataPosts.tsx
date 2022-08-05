import { Post } from "@prisma/client";
interface IComment {
	id: string;
	content: string;
	ownerId: string;
}

export const posts: Post[] = [
    {
        id: '1',
		username: 'omar alwahiby',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likes: [],
    },
	{
        id: '2',
		username: 'omar alwahiby',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likes: [],
    },
	{
        id: '3',
		username: 'omar alwahiby',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likes: [],
    },
	{
        id: '4',
		username: 'omar alwahiby',
		userAvatarUrl: 'https://github.com/github.png?size=460',
		description: "Back to school we go... #Walking to the futureA distinctive collection of Nike bags from the sports collection from #Jarir_Library ..",
		imageUrl:
			'https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
		date: new Date(),
		likes: [],
    },
]