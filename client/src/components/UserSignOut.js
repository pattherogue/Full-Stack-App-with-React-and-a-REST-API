import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';

const UserSignOut = ({context}) => {
    // signs out autheticated user
    useEffect(() => context.actions.signOut());
    return (
        // redirects user to default route 
        <Switch to="/" />
    );
}

export default UserSignOut;


