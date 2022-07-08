import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const UserSignOut = ({context}) => {
    useEffect(() => context.actions.signOut());
    return (
        <Redirect to="/" />
    )
}

// signs out autheticated user
// redirects user to default route 