

import { AboutUs } from '../components/Company/AboutUs';
import { CompanyProfilePage } from '../components/Company/CompanyProfile';
import { CompanyPosts } from '../components/Company/Posts';
import { Nav } from '../components/Nav';
import '../styles/company.css';

export function CompanyProfile() {

    return (
        <>
            <Nav />
            <CompanyProfilePage />
            <AboutUs />
            <CompanyPosts/>

        </>
    )
}

