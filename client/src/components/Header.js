import React, { Componenet } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Componenet {
    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        return (
            
        )
    }
}
// display top menu bar
// sign in button
// sign up button ( if not authenticated user)
// user's name 
// sign out button (if authenticated user)
