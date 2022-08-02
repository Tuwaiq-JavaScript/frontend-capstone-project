import { BsPencil } from 'react-icons/bs';
import '../../styles/profile.css';



export function AboutMe() {

    return (
        <>

            <div className='sub-boxs-aboutme'>
                <div className='experiance-container'>
                    <div className='sub-box-top'>
                        <h3>About me</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                        </div>

                    </div>
                    <div className='aboutme-content'>
                        <p>
                            Interested in the field of the web, cybersecurity and databases, lover of technology, 
                            I have sufficient knowledge of design, beginner in Photoshop, Ps, good knowledge in systems
                             analysis and design, sufficient knowledge in php & python
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
