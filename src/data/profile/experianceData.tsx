export interface IExperience {
    id: string;
    jobAvatarUrl: string;
    title: string;
    description: string;
    date: Date;
    city: string;


}

export const experiences: IExperience[] = [
    {
        id: '1',
        jobAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQFrJStbvraiXw/company-logo_100_100/0/1519117083891?e=1667433600&v=beta&t=zWEmBCyhvwUNW_VtLFxdsOGc0CrDp9cepY0YYoeQitI" alt="" ',
        title: 'Javascript Full-stack developer',
        description: `الاتحاد السعودي للامن السيبراني والبرمجة والدرونز`,
        date: new Date('2019-May-01'),
        city: 'Najran, Saudi Arabia'
    },
    /// post with my dog image
    {
        id: '2',
        jobAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQFrJStbvraiXw/company-logo_100_100/0/1519117083891?e=1667433600&v=beta&t=zWEmBCyhvwUNW_VtLFxdsOGc0CrDp9cepY0YYoeQitI" alt="" ',
        title: 'Computer Programmer',
        description: `شركة العرض المتقن`,
        date: new Date('2017-Aug-20'),
        city: 'Al-Baha, Saudi Arabia'
    },
    {
        id: '3',
        jobAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQFrJStbvraiXw/company-logo_100_100/0/1519117083891?e=1667433600&v=beta&t=zWEmBCyhvwUNW_VtLFxdsOGc0CrDp9cepY0YYoeQitI" alt="" ',
        title: 'Learning and Development Specialest',
        description: `وزارة الاتصالات وتقنية المعلومات`,
        date: new Date('2020-Nov-27'),
        city: 'Riyadh, Saudi Arabia'
    },
];