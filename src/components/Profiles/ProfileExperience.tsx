import { BsPencil } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import '../../styles/profile.css';
import { experiences, IExperience } from '../../data/profile/ExperianceProfileData';

interface ExperienceProps {
    experience: IExperience;
}



export function Experience({ experience }: ExperienceProps) {

    return (

        <>

            <div className='content-sub-box'>

                <div>
                    <img className='experience-aftar' src={experience.experienceAvatarUrl} alt="" />
                </div>
                <div className='content-box'>
                    <h3> {experience.title}</h3>
                    <p>{experience.description}</p>
                    <p className='last-line-sub-box'>{experience.city}</p>
                </div>


            </div>
            <hr />
        </>




    )
}


export function ExperienceProfile() {
    const experienceDivs = experiences.map((experience: any) => <Experience experience={experience} />);

    return (
        <>

            <div className='sub-boxs'>
                <div className='experiance-container'>
                    <div className='sub-box-top'>
                        <h3>Experience</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                            <AiOutlinePlus size={30} />
                        </div>

                    </div>

                </div>
                <div>
                    {experienceDivs}
                </div>
            </div>
        </>
    )
}
