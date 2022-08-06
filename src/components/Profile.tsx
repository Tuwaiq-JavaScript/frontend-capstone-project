import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";


export function Profile() {
    const [name,setName]=useState('Latefah')


    function newname(){
        const newname:any=prompt('أدخل الإسم هنا ')
        setName(newname)
      }


    return (
        
        <div id="main-card">
        

  <div className="cover-photo"></div>
  <div className="photo">
      <img className='proimg' src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
  </div>
  

  <  button className="edit"type="submit" onClick={newname} >  Edit < AiFillEdit className ='iconInstagram' size={14}/> </button>
  <br/>
  <div className="content">
       <div className="card-body">

<h1 className="h3"> PROFILE PAGE:</h1>
      

<table>
              <tbody>
                  <tr>
                      <td>الاسم كامل</td>
                      <td>:</td>
                      <td>{name}</td>
                  </tr>
                  <tr>

                  <td>اسم المستخدم</td>
                      <td>:</td>
                      <td>tofee.b</td>
                  </tr>
                  <tr>
                      <td>البريد الإلكتروني</td>
                      <td>:</td>
                      <td>imlatefah@gmail.com</td>
                  </tr>

                  <tr>
                      <td>انضم في<b/></td>
                      <td>:</td>
                      <td>Jul 30, 2022</td>
                  </tr>
                  </tbody>
          </table> 
          {/* <div> Joined on Jul 30, 2022 </div> */}
          </div>

  

       {/* <h3 > tofee.b :اسم المستخدم </h3>
      <h3> Icast_2022@gmail.com : البريد الإلكتروني </h3>
  
      <p> < AiFillGift  className ='iconInstagram' size={24}/> Joined on Jul 31, 2022</p><br />
      <br />  */}
     
  
  </div>
  
</div>

       
    

);}

function usestate(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
