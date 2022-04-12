import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Order = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h1>{user ? user.displayName : "this is not order page"}</h1>
        </div>
    );
};

export default Order;