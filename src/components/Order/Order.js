import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Order = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>{user ? user.displayName : "this is not order page"}</h1>
        </div>
    );
};

export default Order;