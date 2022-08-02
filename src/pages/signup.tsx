export function SignupPage() {
    return <>
     <div className="container-signup-page">
        <h2>Linked<span>
            <i className="fab fa-linkedin"></i>
        </span></h2>
        <div className="text-signup-page">
            <h1>Sign up</h1>
            <p>Make the most of your professional life</p>
        </div>
        <div className="your-input-signup-page">
            <div className="input-signup-page">
                <input type="text" name="email" 
                    id="email" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-signup-page">
                <input type="password" name="password" 
                    id="password" required />
                <label htmlFor="password">
                    Password(6 or more characters)
                </label>
            </div>
        </div>
<p>           By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy. </p>
    
        <button className="button-signup-page">Agree & join</button>
        <p className="join-link-signup-page">
        Already on LinkedIn?
                    <a href="#" className="join-now-signup-page">
                    Sign in
            </a>
        </p>
    </div>

    </>;
    
}