import { BsPencil } from 'react-icons/bs';
import '../../styles/company.css';



export function AboutUs() {

    return (
        <>

            <div className='sub-boxs-aboutus'>
                <div className='aboutUs-container'>
                    <div className='sub-box-top'>
                        <h3>About us</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                        </div>

                    </div>
                    <div className='aboutus-content'>
                        <p>
                            As a part of solutions by stc vision and commitment to be the leading regional operator in the field of information and communications technology, comes the role of Solutions as one of the major players in achieving this vision, by providing technology solutions that reach far and beyond.
                        </p>
                        <div>
                        <h4 className='our-website'>Our website</h4>
                        <a href="https://solutions.com.sa/">https://solutions.com.sa/</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
