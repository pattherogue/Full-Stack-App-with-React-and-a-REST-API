import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const UserSignOut = ({context}) => {
    // signs out autheticated user
    useEffect(() => context.actions.signOut());
    return (
        // redirects user to default route 
        <Redirect to="/" />
    );
}

export default UserSignOut;


