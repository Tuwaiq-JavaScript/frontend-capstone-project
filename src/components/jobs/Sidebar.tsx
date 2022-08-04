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
  <a className="felx-sid"><BsFillBookmarkFill /><span>My jobs</span></a>
</div>
<div>
  <a className="felx-sid" href=""><BsFillBellFill/><span>Job alters</span></a>
</div>
<div>
  <a className="felx-sid"><BsFileCheck /><span>Salary</span></a>
</div>
<div>
  <a className="felx-sid"><AiTwotoneCopy /><span>Interview Builder</span></a>
</div>
<div>
  <a className="felx-sid"><AiOutlineFile/><span>Resume Builder</span></a>
      </div>  
      <div>
  <a className="felx-sid"><BsYoutube/><span>Job seeker guidance</span></a>
      </div>  
      <div>
  <a className="felx-sid"> <AiFillSetting /><span>Application settings</span></a>
      </div>  
        </ul>
<div>
</div>
        
</div>
    
)
    }