import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const UserSignOut = ({context}) => {
    // signs out autheticated user
    useEffect(() => context.actions.signOut());
    return (
        <Redirect to="/" />
    );
}

export default UserSignOut;


// redirects user to default route 