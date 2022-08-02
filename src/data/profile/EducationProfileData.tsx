export interface IEducation {
    id: string;
    educationAvatarUrl: string;
    universityName: string;
    educationDegree: string;
    date: Date;
    fieldOfStudy: string;


}

export const educations: IEducation[] = [
    {
        id: '1',
        educationAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGXpatISgXjOw/company-logo_100_100/0/1594741310804?e=1667433600&v=beta&t=Ca9WqyskZda3HkFsYr-2fbQYYXO_GtLPW3keCa5kYIU',
        universityName: 'جامعة الباحة',
        educationDegree: 'Bachelor degree in Information Technology',
        date: new Date('2019-May-01'),
        fieldOfStudy: 'Computer Science and Information Technology'
    },
    /// post with my dog image
    {
        id: '2',
        educationAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGoi_IMn8P5NQ/company-logo_100_100/0/1519917969975?e=1667433600&v=beta&t=djttkG4GHAEgBHwcgriBJbw-aNE_ZeZCRH3g1V1fw9o',
        universityName: 'جامعة الحدود الشمالية',
        educationDegree: 'Bachelor degree in Information Technology',
        date: new Date('2019-May-01'),
        fieldOfStudy: 'Computer Science and Information Technology'
    },
    {
        id: '3',
        educationAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGuuQiRBZlv8Q/company-logo_100_100/0/1646327183627?e=1667433600&v=beta&t=mbvJJzj9H7xgveWZygcOqVbbW0T_vBwOs9_doedIB2s',
        universityName: 'جامعة الأمير سطام بن عبدالعزيز',
        educationDegree: 'Bachelor degree in Information Technology',
        date: new Date('2019-May-01'),
        fieldOfStudy: 'Computer Science and Information Technology'
    },
];