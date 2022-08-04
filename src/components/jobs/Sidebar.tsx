import { Link } from 'react-router-dom';
import { BsBellFill ,BsFileCheck,BsYoutube , BsFillBookmarkFill, BsFillBellFill}  from "react-icons/bs";
import { AiOutlineFile} from "react-icons/ai";
import '../../styles/sidebarjob.css'
import { AiFillSetting , AiTwotoneCopy } from "react-icons/ai";

export function Sidebar() {
	return (
		
<div>
<ul id="social-sidebar">
<div>
  <a className="felx-sid"><BsFillBookmarkFill /><span className='span-side'>My jobs</span></a>
</div>
<div>
  <a className="felx-sid"><BsFillBellFill/><span className='span-side'>Job alters</span></a>
</div>
<div>
  <a className="felx-sid"><BsFileCheck /><span className='span-side'>Salary</span></a>
</div>
<div>
  <a className="felx-sid"><AiTwotoneCopy /><span className='span-side'>Interview Builder</span></a>
</div>
<div>
  <a className="felx-sid"><AiOutlineFile/><span className='span-side'>Resume Builder</span></a>
      </div>  
      <div>
  <a className="felx-sid"><BsYoutube/><span className='span-side'>Job seeker guidance</span></a>
      </div>  
      <div>
  <a className="felx-sid"> <AiFillSetting /><span className='span-side' >Application settings</span></a>
      </div>  
        </ul>
<div>
</div>
        
</div>
    
)
    }