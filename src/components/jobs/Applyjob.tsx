import '../../styles/applyjob.css'
import { BsFillBagCheckFill} from "react-icons/bs";
import { BiBuilding, BiBulb, BiSelectMultiple } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { recommendeds } from '../../data/jobs/job';
import { Recommended } from './Job';

export function Applyjob() {
    const recommendedsDivs = recommendeds.map((recommended) => <Recommended recommended={recommended} />);

	return (
        <>
        <div>

        <span className='based'>
            <h5 className='h-aplly'>Jobs based on your Profile</h5>
            <div className='posts' id=''>
			{recommendedsDivs}
		</div>
        </span>

        <span className='apply'>
        <h1>Frontend Developer</h1>
        <h6>WSM Company | شركة وسم  Riyadh, Saudi Arabia On-site 1 day ago  157 applicants</h6>
 <div>
    <div><BsFillBagCheckFill  /> <span>Full-time · Mid-Senior level</span></div>
    <div><BiBuilding /> <span>11-50 employees · IT Services and IT Consulting</span></div>
    <div><BiBulb /><span>See recent hiring trends for WSM Company | شركة وسم. Try Premium for free</span></div>
    <div><BiSelectMultiple /><span>Actively recruiting</span></div>
 </div>
 <div>
 <span><a href="https://safcsp.org.sa/"> <button className='btn-1'><AiFillLinkedin /> Easy Apply</button></a></span>
 <span><button className='btn-2'>Save</button></span>
 </div>
 <div>
    <p> <b>JavaScript developer</b>
    is responsible for completing applications and software design using Java programming language and creating, presenting reusable charts or graphs within the websites, producing front-end applications, and performing code analysis and overall improvement of style and usability.
    </p>
 </div>
 <div>
    <div className='apply-text'>Responsibilities:</div>
<li className='li-aplly'>D3.js library within JavaScript.</li>
<li className='li-aplly'>Design and develop data visualization functionality.</li>
<li className='li-aplly'>Implement responsible web design principles to ensure that website</li>
<li className='li-aplly'>Design a framework for creating user apps that grow with the needs.</li>
<li className='li-aplly'>Incorporating applications, graphics, audio,</li>
<li className='li-aplly'>Modifying designs and specifications of complex UI/UX.</li>
<li className='li-aplly'>Collaborating with front-end and back-end web developers.</li>
 </div>
 <h2>"</h2>
 <div>
    <div className='apply-text'>Requirements and Skills:</div>
<li className='li-aplly'>Bachelor's degree in Computer Science or equivalent.</li>
<li className='li-aplly'>+3 years’ experience working with JavaScript code and D3.js.</li>
<li className='li-aplly'>Working with large volumes of uncleaned data.</li>
<li className='li-aplly'>Familiarity with a variety of databases.</li>
<li className='li-aplly'>Statistical analysis of data.</li>
<li className='li-aplly'>Data representation through JSON and XML.</li>
<li className='li-aplly'>Understanding of web markup, including HTML and CSS code.</li>
<li className='li-aplly'>Page inspection and web browser developer console.</li>
<li className='li-aplly'>Has worked with front-end design libraries.</li>

 </div>
 
        </span>
        </div>
        </>

    )
}