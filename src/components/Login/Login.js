import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signWithGoogle } = useFirebase()
    return (
        <div className='login'>
            <h2 style={{ color: 'green' }}>Login!</h2>
            <button style={{ margin: '20px' }} onClick={signWithGoogle}>Google SignIn</button>
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