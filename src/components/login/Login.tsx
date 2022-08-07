import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/login.css'

export function Login() {
    const email = useRef() as React.MutableRefObject<HTMLInputElement>;
    const password = useRef() as React.MutableRefObject<HTMLInputElement>;
    const getEmail = localStorage.getItem('emailData')
    const getPassword = localStorage.getItem('passwordData')
    let navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const form = e.target
        let UsersData = JSON.parse(localStorage.getItem('formData') || "[]");
        let userFound = UsersData.find((u: any) => u.email == form.elements.email.value)
        if (!userFound) return alert("You Need Registers")
        if (userFound.password != form.elements.password.value) return alert("The Password Incorrect")
        localStorage.setItem("Profile", JSON.stringify(userFound))
        navigate("/home")
    }



    return (
        <>


            <form onSubmit={handleSubmit} >

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
                            <input type="text" name="email" ref={email}
                                id="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-login-page">
                            <input type="password" name="password"
                                id="password" ref={password} required />
                            <label htmlFor="password">
                                Password
                            </label>
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin" className="forgot-password-link-login-page">
                        Forgot Password?
                    </a>
                    <button className="button-login-page">Sign in</button>
                    <p className="join-link-login-page">
                        New to linkedin?
                        <Link to={'/sign-up'}>
                            <a href="#" className="join-now-login-page">
                                Join now
                            </a>
                        </Link>
                    </p>
                </div>
            </form>

        </>

    )
}