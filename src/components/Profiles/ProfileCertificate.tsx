
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { certificates, ICertificate } from '../../data/profile/CertificatesProfileData';
import '../../styles/profile.css';



export function CertificateProfile() {
    const certificateDivs = certificates.map((certificate: any) => <Certificate certificate={certificate} />);

    return (
        <>
            <div className='sub-boxs'>
                <div className='experiance-container'>
                    <div className='sub-box-top'>
                        <h3>Cirtificates</h3>
                        <div className='icon-sub-box-head'>
                            <BsPencil size={20} />
                            <AiOutlinePlus size={30} />
                        </div>

                    </div>

                </div>
                <div>
                    {certificateDivs}
                </div>
            </div>
        </>
    )
}

interface CertificateProps {
    certificate: ICertificate;
}



export function Certificate({ certificate }: CertificateProps) {

    return (

        <>

            <div className='content-sub-box-certificate'>
                <div>
                    <img className='education-aftar' src={certificate.certificateAvatarUrl} alt="" />
                </div>
                <div className='content-certificate-box'>
                    <h3> {certificate.certificateName}</h3>
                    <p>{certificate.Issuer}</p>
                    <p className='last-line-sub-box'>{certificate.CertificateID}</p>
                </div>



            </div>
            <hr />

        </>




    )
}
// export function hr() {

//     if (experiences.length - 1) {
//         return <hr />
//     }
// }