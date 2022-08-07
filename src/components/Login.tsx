import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// import './styles/index1.css';


interface UserProps {
    email: string;
  }


    export function Login() {

        const [user, setUser] = useState<UserProps>();
        const [email,setEmail]=useState<string>("");
        const [password,setPassword]=useState<string>("");
        const [error,setError]=useState<string>("");

         const navigate = useNavigate();
         //const dispatch = useAppDispatch();

         useEffect(() => {
            if (user) {
              navigate("/");
            }
          }, [navigate, user]);
          const handleLogin = (e: { preventDefault: () => void }) => {
            if (email.includes("@")) {
              if (email.split("@")[1] !== "gmail.com") {
                e.preventDefault();
                setError("Gmail account only");
              } else {
                const newUser = {
                  email: email,
                };
                localStorage.setItem("user", JSON.stringify(newUser));
                setUser(newUser);
              }
            } else {
              setError("Need Email");
            }
          };
        



        //  const handleSubmit = (event: { preventDefault: () => void }) => {
        //     event.preventDefault();
        
        //     if (
        //       email === process.env.REACT_APP_EMAIL &&
        //       password === process.env.REACT_APP_PASSWORD
        //     ) {
        //       dispatch(login());
        //       setError(false);
        //       navigate("/");
        //     } else {
        //       setError(true);
        //     }
        //   };




         

        return (
       
       
    <div id="wrapper">
        <div >
        <div className="imges-log1">
                {/* <div className="header">
                <img src="https://cdn.discordapp.com/attachments/991974904587091968/1004297290237870161/image0.jpg" alt="" />
      
    </div>  */}
        </div>
        </div>
        <div>
      <><div className="main-content">
            <div className="header">
            <img src="https://cdn.discordapp.com/attachments/991974904587091968/1004297290237870161/image0.jpg" alt="" />
           
            </div>
            <br/>
            <form onSubmit={handleLogin}>
            <div className="l-part" >
                
                
                <input type="text" placeholder=" اسم المستخدم" className="input-1"  required
              value={email}
              onChange={(e) => setEmail(e.target.value)}   />

                {/* onChange={(e) => setEmail(e.target.value)} */}

                <div className="overlap-text">
                    <input type="password" placeholder="كلمة المرور" className="input-2" required
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
                    {/* onChange={(event) => setPassword(event.target.value)} */}
                </div>
              
<br/>
                <div className="check">
               <input type="checkbox" name="checkbox" id="checkbox" />
               <label  className="check-h1" htmlFor="checkbox">تذكرني</label>
           </div>
               
           <Link to={"/prodcast"}> <input type="button" value="الدخول" className="log-btn" /></Link>
                {/* {error && <span className="login__err">Wrong emai or password !</span>} */}
                
                
        <div className="separator">
      <div className="line"></div>
      <p>🎙️</p>
      <div className="line"></div>
    </div>
    
    
                  <a  className="check-h1" href="https://www.iheart.com/podcast/">هل فقدت كلمة مرورك؟</a>
            </div> </form>
        </div>
        
        <div className="sub-content-log ">
                <div className="s-part">
                 ليس لديك حساب؟  <Link to={"/register"}> التسجيل</Link>
                </div>
                
            </div></>
            
            
            </div>
            
            </div>
    
          
    
        );
    }
