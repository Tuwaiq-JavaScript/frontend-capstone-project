import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="login">
			<div className="login-text">
				<img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login-logo" />
				<h3>Connect with friends and the world around you on Facebook.</h3>
			</div>
			<div className="login-container">
				<form className="login-form">
					<input type="text" placeholder="Email or phone number" />
					<input type="password" placeholder="Password" />
					<Link to={'/'}>
					<button className="login-btn-login">Log In</button> <br />
					</Link>
					<a href="#">Forgot password</a>
					<div className="login-underline">____________________________________________________</div>
					<Link to={'/signup'}>
					<button className="login-btn-create-acc">Create new account</button>
					</Link>
				</form>
				<h4 className="login-h4">
					<a className="login-a" href="#">
						Create a Page
					</a>{' '}
					for a celebrity, brand or business
				</h4>
			</div>
		</div>
	);
}
