import { BsPencil } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import '../../styles/profile.css';
import { experiences, IExperience } from '../../data/profile/ExperianceProfileData';
import { useContext } from 'react';
import { linkedinContext } from '../../utils/LinkedInContext';
import React from 'react';



export function ExperienceProfile() {

    const experienceDivs = experiences.map((experience: any) => <Experience experience={experience} />);

    const { addExperience } = React.useContext(linkedinContext)

    return (
        <>

            <div className='sub-boxs'>
                <div className='experiance-container'>
                    <div className='sub-box-top'>
                        <h3>Experience</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                            <button onClick={addExperience}>
                                <AiOutlinePlus size={30} />
                            </button>

                        </div>

                    </div>

                </div>
                <div>
                    {experienceDivs}
                    {/* {experiences.length - 1 ? (null) : "|" } */}
                </div>
            </div>
        </>
    )
}

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
                    <div>
                        <p>{experience.description}</p>
                        <p className='last-line-sub-box'>{experience.city}</p>
                    </div>
                </div>


            </div>

        </>




    )
}
