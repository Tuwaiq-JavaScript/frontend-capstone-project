export interface IExperience {
    id: string;
    avatar: string;
    title: string;
    company: string;
    place: string
}

let ProfileData = JSON.parse(localStorage.getItem('Profile') || "[]");

export const experiences: IExperience[] = ProfileData.experience