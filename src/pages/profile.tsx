

import { Posts } from '../components/Home/Posts';
import { Nav } from '../components/Nav';
import { AboutMe } from '../components/Profiles/AboutMe';
import { CertificateProfile } from '../components/Profiles/ProfileCertificate';
import { ProfilePage } from '../components/Profiles/ProfileCompon';
import { EducationProfile } from '../components/Profiles/ProfileEducation';
import { ExperienceProfile } from '../components/Profiles/ProfileExperience';
import { ProfilePosts } from '../components/Profiles/ProfilePosts';
import '../styles/profile.css';

export function Profiles() {

    return (
        <>
            <Nav />
            <ProfilePage />
            <AboutMe />
            <ExperienceProfile />
            <EducationProfile />
            <CertificateProfile />
            <ProfilePosts />
        </>
    )
}



