import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const UserSignOut = ({context}) => {
    // signs out autheticated user
    useEffect(() => context.actions.signOut());
    return (
        // redirects user to default route 
        <Navigate to="/" />
    );
}

export default UserSignOut;


