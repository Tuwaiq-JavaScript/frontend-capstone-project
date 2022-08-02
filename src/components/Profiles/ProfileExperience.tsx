
import '../../styles/profile.css';

import { IExperience } from '../../data/profile/experianceData';

interface ExperienceProps {
    experience: IExperience;
}



export function Experience({ experience }: ExperienceProps) {

    return (


       
            
            <div className='content-sub-box'>

                <div>
                    <img src={experience.jobAvatarUrl} alt="" />
                </div>
                <div className=''>
                    <h3> {experience.title}</h3>
                    <p>{experience.description}</p>
                    <p>{experience.city}</p>
                <hr />
                </div>


            </div>

    


    )
}