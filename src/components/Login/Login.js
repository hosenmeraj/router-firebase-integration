import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import './Login.css'

const auth = getAuth(app)
const Login = () => {
    const [signWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div className='login'>
            <h2 style={{ color: 'green' }}>Login!</h2>
            <button style={{ margin: '20px' }} onClick={() => signWithGoogle()}>Google SignIn</button>
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