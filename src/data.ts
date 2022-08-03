
export interface ILatest_Post {
	id: string;
	username: string;
    date: string;
    text: string;
	imageUrl: string;
	likeCount: number;
    shareCount: number;
	userAvatarUrl: string;
}
export const posts: ILatest_Post[] = [
    {
        id:'1',
        username:'World Health Organization (Eastern Mediterranean Regional Office)',
        date : 'Yesterday at 13:48  .',
        text:'daily update in the World Health Organization (Eastern Mediterranean Regional Office) Region, as of 1 August 2022, 23:59 Cairo time',
        imageUrl: 'img_covid19_1.jpeg',
        likeCount: 224,
        shareCount: 6,
        userAvatarUrl:'img_world_health.jpeg'
    }
];