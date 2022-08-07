import { useEffect, useState } from 'react';
import { MdSettingsRemote } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/signup.css'



export function Signup() {
    const [data, setData] = useState<any[]>([]);
    const navigate = useNavigate()

    // useEffect(function persistForm() {
    //     return localStorage.setItem('formData', JSON.stringify(data));
    // }, []);


    const handleSignUp = (e: any) => {
        let UsersData = JSON.parse(localStorage.getItem('formData') || "[]");
        e.preventDefault()
        const form = e.target
        if (UsersData.length > 0) {
            let UserFound = UsersData.find((u: any) => u.email == form.elements.email.value)
            if (UserFound) return alert("You Already Regiester")
        }
        let usersArray = [...UsersData]
        const body = {
            id: '1',
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
            avatar: "https://avatars.githubusercontent.com/u/60841988?s=40&v=4",
            post: [],
            educations: [],
            experience: [],
            certificates: [],
            aboutMe: ""
        }
        usersArray.push(body)
        localStorage.setItem('formData', JSON.stringify(usersArray));
        setData(usersArray)
        navigate('/login')
    }




    return (
        <>
            <form onSubmit={handleSignUp}>
                <div className='container-signup-page'>
                    <h2>
                        Linked
                        <span>
                            <i className='fab fa-linkedin'></i>
                        </span>
                    </h2>
                    <div className='text-signup-page'>
                        <h1>Sign up</h1>
                        <p>Make the most of your professional life</p>
                    </div>
                    <div className='your-input-signup-page'>
                        <div className='input-signup-page'>
                            <input type='text' name='name' id='name' required />
                            <label htmlFor='name'>Name</label>
                        </div>
                        <div className='input-signup-page'>
                            <input type='text' name='email' id='email' required />
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className='input-signup-page'>
                            <input type='password' name='password' id='password' required />
                            <label htmlFor='password'>Password(6 or more characters)</label>
                        </div>
                    </div>
                    <p>
                        {' '}
                        By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie
                        Policy.{' '}
                    </p>

                    <button className='button-signup-page'>Agree & join</button>
                    <p className='join-link-signup-page'>
                        Already on LinkedIn?
                        <Link to={'/login'}>
                            <a href='#' className='join-now-signup-page'>
                                Sign in
                            </a>
                        </Link>
                    </p>
                </div>
            </form>
        </>

    )
}