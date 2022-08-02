export function LoginPage() {
	return <>
	<div className="container-login-page">
        <h2>Linked<span>
            <i className="fab fa-linkedin"></i>
        </span></h2>
        <div className="text-login-page">
            <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
        </div>
        <div className="your-input-login-page">
            <div className="input-login-page">
                <input type="text" name="email" 
                    id="email" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-login-page">
                <input type="password" name="password" 
                    id="password" required />
                <label htmlFor="password">
                    Password
                </label>
            </div>
        </div>
        <a href="#" className="forgot-password-link-login-page">
            Forgot Password?
        </a>
        <button className="button-login-page">Sign in</button>
        <p className="join-link-login-page">
            New to linkedin?
            <a href="#" className="join-now-login-page">
                Join now
            </a>
        </p>
    </div>
	</>;
}
