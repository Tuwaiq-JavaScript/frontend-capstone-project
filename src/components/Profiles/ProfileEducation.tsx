
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { educations, IEducation } from '../../data/profile/EducationProfileData';
import { experiences } from '../../data/profile/ExperianceProfileData';
import '../../styles/profile.css';



export function EducationProfile() {
    const educationDivs = educations.map((education: any) => <Education education={education} />);

    return (
        <>
            <div className='sub-boxs'>
                <div className='experiance-container'>
                    <div className='sub-box-top'>
                        <h3>Education</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                            <AiOutlinePlus size={30} />
                        </div>

                    </div>

                </div>
                <div>
                    {educationDivs}
                </div>
            </div>
        </>
    )
}

interface EducatinProps {
    education: IEducation;
}



export function Education({ education }: EducatinProps) {

    return (

        <>

            <div className='content-sub-box'>

                <div>
                    <img className='education-aftar' src={education.educationAvatarUrl} alt="" />
                </div>
                <div className='content-eduction-box'>
                    <h3> {education.universityName}</h3>

                    <p>{education.educationDegree}</p>
                    <p className='last-line-sub-box'>{education.fieldOfStudy}</p>
                </div>



            </div>

            <hr />
        </>




    )
}

