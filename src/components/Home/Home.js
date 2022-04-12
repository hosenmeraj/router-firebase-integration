import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h1>home</h1>
            <p>{user ? user.displayName : "this is not home page"}</p>
        </div>
    );
};

export default Home;