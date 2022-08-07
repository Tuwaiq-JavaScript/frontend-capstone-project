import { Link } from "react-router-dom";

export default function SignUp() {
	return (
		<div className="signup">
		  <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="signup-logo" />
			<div className="signup-container">
				<h1>Sign Up</h1>
				<p>It's quick and easy.</p>
				<div className="signup-hr3"/>
				<form>
					<div className="signup-row">
						<input type="name" placeholder="First Name" className="signup-name"/>
						<input type="name" placeholder="Last Name" className="signup-name"/>
					</div>
					<div className="signup-center">
						<input type="email" placeholder="Mobile number or email"/>
						<input type="password" placeholder="New password" />
					</div>
					<h5 className="signup-date-h5">Birthday</h5>
					<div className="signup-row">
						<select className="signup-date2">
							<option value="Day">Day</option>
							<option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
						</select>
						<select className="signup-date3">
						<option value="Day">Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
						</select>
						<select className="signup-date3">
						<option value="2022">2022</option>
						<option value="2021">2021</option>
						<option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
						</select>
					</div>
					<h5 className="signup-gender">Gender</h5>

					<div className="signup-radio">
						
							<div className="signup-wrapper">
								<label>Female</label>
								<input type="radio"  name="gender" value="Female"/>
							</div>
							
							<div className="signup-wrapper">
							   <label>Male</label>
							   <input type="radio"  name="gender" value="Male"/>
							</div>
							<div className="signup-wrapper">
							   <label>Other</label>
							   <input type="radio"  name="gender" value="Other"/>
							</div>
							
						
						
					</div>
					<p className="signup-policy">
                        By clicking Sign Up, you agree to our{" "}
                        <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You
            may receive SMS notifications from us and can opt out at any time. </p>
               <Link to={'/profile'}>
					<button type="submit" className="signup-btn">Sign Up</button>
               </Link>
					<p><a className="signup-login" href="login">Already have an account?</a> </p>
				</form>
			</div>
		</div>
	)
}
