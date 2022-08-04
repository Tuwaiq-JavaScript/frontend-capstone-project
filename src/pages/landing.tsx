export function LandingPage() {
	return <>
    <div className="container-Landing-Page" >
			<nav className="nav-Landing-Page">
				<a href="/">
					<img src="/images/login-logo.svg" alt="" />
				</a>
				<div>
					<a className="join-Landing-Page">Join Now</a>
					<a className="signin-Landing-Page">Sign In</a>
				</div>
			</nav>
			<section className="section-Landing-Page">
				<div className="hero-Landing-Page">
					<h1>Welcome to your professional community</h1>
					<img src="/images/login-hero.svg" alt="" />
				</div>
				<div className="form-Landing-Page">
					<button className="google-Landing-Page">
						<img src="/images/google.svg" alt="" />
						Sign in with Google
					</button>
				</div>
			</section>
		</div>
    </>
}