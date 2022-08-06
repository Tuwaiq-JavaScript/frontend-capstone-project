import { Link } from 'react-router-dom';
import { IRecommended } from '../../data/jobs/job';
import '../../styles/jobs.css'

interface RecommendedProps {
	recommended: IRecommended;
}

export function Recommended({ recommended }: RecommendedProps) {
	return (
<div className="container-recommended">
  <div className="item-recommended infoRow-recommended">
    <div className='infoRow-Item-recommended infoRow-likedName-recommended font-bold-recommended'><span> {recommended.jobtitle} <br /> </span>
    <span className='font-gray-recommended '> {recommended.datae}</span>
    </div> 
    
  </div>
 
  <div className="item-recommended">
    <div className='profileInfo-recommended'>
      <div className='profileInfo-image-recommended'> <img className='logo-job' src={recommended.companylogoUrl}  />  </div>
      <div className='profileInfo-text-recommended'>
        <div>
          <Link to={'/applyjob'}>
         <a href=""> <u className='gdu-recommended'>{recommended.title}</u></a>
          </Link>
       <i className="fa-regular fa-bookmark icon-job-recommended" ></i>
        </div>
        <div>
          <span className='font-gray-recommended'>{recommended.companyname}</span>
        </div>
        <div>
          <span className='font-gray-recommended'>{recommended.location}</span> 
        </div>
        <div>
          <p className='font-gray-recommended'>{recommended.Actively}</p>
        </div>
      </div>
    </div>
    <div className='translationSection-recommended'>
      <span className='profileInfo-nth-recommended font-gray-recommended'>{recommended.date}</span>

    </div>
    <hr />
  </div>
  
  
 
</div>


        );
    }