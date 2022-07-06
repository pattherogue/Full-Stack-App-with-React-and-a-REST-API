import React, { Componenet } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Componenet {
    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        return (
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo"><a href="index.html">Courses</a></h1>
                    <nav>
                        { authUser ? (
                            <React.Fragment>
                                <ul className="header--signedin">
                                    <li>{`Welcome, ${authUser.firstName} ${authUser.lastName}`} </li>
                                    <li><NavLink to="/signout">Sign Out</NavLink></li>
                                </ul>
                            </React.Fragment> 
                        ) : (
                            <React.Fragment>
                                <ul className="header--signedout">
                                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                                    <li><NavLink to="sign-in.html">Sign In</NavLink></li>
                                </ul>
                            </React.Fragment>
                        )
                    }
                        
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
