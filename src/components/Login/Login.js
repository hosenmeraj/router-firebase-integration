import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import './Login.css'
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {
    const [signWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div className='login'>
            <h2 style={{ color: 'green' }}>Login!</h2>
            <button style={{ margin: '20px' }} onClick={handleGoogleSignIn}>Google SignIn</button>
            <form>
                <input type="email" placeholder='email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;