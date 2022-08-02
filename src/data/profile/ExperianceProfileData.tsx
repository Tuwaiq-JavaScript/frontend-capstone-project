export interface IExperience {
    id: string;
    experienceAvatarUrl: string;
    title: string;
    description: string;
    date: Date;
    city: string;


}

export const experiences: IExperience[] = [
    {
        id: '1',
        experienceAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQFrJStbvraiXw/company-logo_100_100/0/1519117083891?e=1667433600&v=beta&t=zWEmBCyhvwUNW_VtLFxdsOGc0CrDp9cepY0YYoeQitI',
        title: 'Javascript Full-stack developer',
        description: `الاتحاد السعودي للامن السيبراني والبرمجة والدرونز`,
        date: new Date('2019-May-01'),
        city: 'Najran, Saudi Arabia'
    },
    /// post with my dog image
    {
        id: '2',
        experienceAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQF2OLL4Oweyvw/company-logo_100_100/0/1634310217372?e=1667433600&v=beta&t=6N9LM-sT5PptEDw9Id0rdaZfC-qjxb_RkJtgPYcxvaE',
        title: 'Computer Programmer',
        description: `شركة العرض المتقن`,
        date: new Date('2017-Aug-20'),
        city: 'Al-Baha, Saudi Arabia'
    },
    {
        id: '3',
        experienceAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGVRgxfIsqxZg/company-logo_100_100/0/1522104330205?e=1667433600&v=beta&t=SvUiW5CWhAM7sF_KilkrxtI9Qm-Hx1NGgciR_LL6HQ4',
        title: 'Learning and Development Specialest',
        description: `وزارة الاتصالات وتقنية المعلومات`,
        date: new Date('2020-Nov-27'),
        city: 'Riyadh, Saudi Arabia'
    },
];