import {  FiShare } from "react-icons/fi";
import { AiOutlineHeart,AiOutlineLink} from 'react-icons/ai';
import {BsPlay} from 'react-icons/bs';
export function Contentone6() {



    return (

 <div className="audio-start">
            
{/* the big flex */}
<div className="audiuo-start-header">

<div> <h1> السبت </h1>
< FiShare size={20} />
<button className="btn-content"type="submit">إبدأ الإستماع </button>

<h3>
معلومات
تاريخ أول حلقة:24 نوفمبر, 2020</h3>
<h3>تاريخ أول حلقة:24 نوفمبر, 2020</h3>
<h5>حسابات التواصل</h5>
<h5>@SatCouch</h5>
</div>
            <div className="card1">
                
            
               <img src="/wd1.jpg" alt="" className="contant-image" /> 

         </div>
    
</div>
{/* ********************************* */}

<div className="content-title">
<h2>الحلقات</h2></div>


<div className="sound">

<div className="sound-border">
<div><h3>قوة التخلي | كنبة السبت </h3></div> 

<div>
<audio controls >
  <source src="ep1.mp3" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
</div>
<div className='sound-border-2'>
<button className="btn-content-one"type="submit"> <AiOutlineHeart size={10} /> 366</button>
<button className="btn-content-one"type="submit"> <BsPlay size={10} /> 777</button>
<button className="btn-content-one"type="submit"> <AiOutlineLink size={10} /> Link</button>
</div>
</div>

</div>
</div>

)}