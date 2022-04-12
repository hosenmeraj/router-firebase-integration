import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Reviews = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Reviews</h1>
            <p>{user ? user.displayName : "people not like this products"}</p>
        </div>
    );
};

export default Reviews;