import { Link } from 'react-router-dom';

export function Login(){
  return(<>
  <div className="lgn-bx"> 
  <div className="loginbx-container">
      <div className="login-header">
      <h1 className="header--text">Welcome to Icast </h1>
      {/* <p className="parag"><Link id="parag-link" to={"/posts"}>DEV Community</Link>  is a community of 882,551 amazing developers</p> */}
       {/* <p><a href="0">DEV Community</a> is a community of 883,563 amazing developers</p> */}
      </div>

      <form className="inputs">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password" >Password</label>
          <input type="text" name="password" id="pass" />
          <div className="check">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember Me</label>
          </div>
          <div className="continue-pass">
              <Link to={"/profile"}><button className="continue"> 
              Continue
              </button></Link>
           <Link to={"/password/new"}>I forgot my password</Link>
          </div>
      </form>
  </div></div>

  </>
  )

}