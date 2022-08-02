export interface ICertificate {
    id: string;
    certificateAvatarUrl: string;
    certificateName: string;
    Issuer: string;
    date: Date;
    CertificateID: string;


}

export const certificates: ICertificate[] = [
    {
        id: '1',
        certificateAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQHIIPbAKvys2w/company-logo_100_100/0/1657040613266?e=1667433600&v=beta&t=iawQ41rRGQR1ElXlOCQJGrMJ795MyrkI4nTj8ZEcQes',
        certificateName: 'Cisco Certified Network Associate CCNA 200-301',
        Issuer: 'Cisco',
        date: new Date('2019-May-01'),
        CertificateID: '13DHFG459DDJOS1'
    },
    /// post with my dog image
    {
        id: '2',
        certificateAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1618231291419?e=1667433600&v=beta&t=IMY3gOAPPw6g-LAfC5dWhjZktr6V2YX71w0-t2G9fAA',
        certificateName: 'Microsoft Official Course in 40463Database',
        Issuer: 'Microsoft',
        date: new Date('2019-May-01'),
        CertificateID: '13DHFG459DDJOS1'
    },
    {
        id: '3',
        certificateAvatarUrl: 'https://media-exp1.licdn.com/dms/image/C510BAQG_ychDDWVCjg/company-logo_100_100/0/1559635391273?e=1667433600&v=beta&t=f3mo7-iWO7CYsxGFiqFRBWgrHhEpC4SupTaM8huc9Yg',
        certificateName: 'Entry Level Course on Cybersecurity',
        Issuer: 'Kaspersky',
        date: new Date('2019-May-01'),
        CertificateID: '13DHFG459DDJOS1'
    },
];