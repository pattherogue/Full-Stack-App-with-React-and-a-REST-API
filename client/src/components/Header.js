import React, { Componenet } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Componenet {
    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        return (
            <header>
                <div class="wrap header--flex">
                    <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                    <nav>
                        <ul class="header--signedout">
                            <li><a href="sign-up.html">Sign Up</a></li>
                            <li><a href="sign-in.html">Sign In</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
// display top menu bar
// sign in button
// sign up button ( if not authenticated user)
// user's name 
// sign out button (if authenticated user)
