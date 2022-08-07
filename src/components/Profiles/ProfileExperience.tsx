import { BsPencil } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import '../../styles/profile.css';
import { experiences, IExperience } from '../../data/profile/ExperianceProfileData';
import { useState } from 'react';
import { Popup } from '../popup';

let ProfileData = JSON.parse(localStorage.getItem('Profile') || "[]");

interface ExperienceProps {
    experience: IExperience;
}



export function Experience({ experience }: ExperienceProps) {

    return (

        <>

            <div className='content-sub-box'>

                <div>
                    <img className='experience-aftar' src={experience.avatar} alt="" />
                </div>
                <div className='content-box'>
                    <h3> {experience.title}</h3>
                    <div>
                        <p>{experience.company}</p>
                        <p className='last-line-sub-box'>{experience.place}</p>
                    </div>
                </div>


            </div>
            <hr />
        </>




    )
}


export function ExperienceProfile() {
    const [showExperience, setShowExperience] = useState(false)
    const experienceDivs = experiences.map((experience: any) => <Experience experience={experience} />);

    return (
        <>

            <div className='sub-boxs'>
                <div className='experiance-container'>
                    <div className='sub-box-top'>
                        <h3>Experience</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                            <div onClick={() => setShowExperience(true)} id='myModal'>
                                <AiOutlinePlus size={30} />
                            </div>
                        </div>
                        <Popup show={showExperience} setShow={setShowExperience} />
                    </div>

                </div>
                <div>
                    {experienceDivs}
                </div>
            </div>
        </>
    )
}
