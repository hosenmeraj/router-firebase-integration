import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h2 style={{ "color": "green" }}>Register!</h2>
            <form>
                <input type="text" placeholder='name' />
                <br />
                <input type="email" placeholder='email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;