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
		description: "Saudi Arabias Al-Baha lavender garden becomes new tourism icon in region",
		imageUrl:
			'https://external.fruh7-1.fna.fbcdn.net/emg1/v/t13/4636890037768348608?url=https%3A%2F%2Fwww.arabnews.com%2Fsites%2Fdefault%2Ffiles%2Fmain-image%2F2022%2F07%2F29%2F3361756-1032412691.jpg&fb_obo=1&utld=arabnews.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=00_AT-ORuTMfQ3OHfG-wmpri8twOIE3HdjFFHpEqtJ74kAm4A&oe=62EAE1B5&_nc_sid=c504da',
		date: new Date(),
		likeCount: 0,
		comments: [],
    }
]