import React, { Componenet } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Componenet {
    // display top menu bar
    render() {
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        // sign in button
        return (
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo"><a href="index.html">Courses</a></h1>
                    <nav>
                        { authUser ? (
                            // sign up button ( if not authenticated user)
                            // user's name 
                            <React.Fragment>
                                <ul className="header--signedin">
                                    
                                    <li>{`Welcome, ${authUser.firstName} ${authUser.lastName}`} </li>
                                    <li><NavLink to="/signout">Sign Out</NavLink></li>
                                </ul>
                            </React.Fragment> 
                        ) : (
                            // sign out button (if authenticated user)
                            <React.Fragment>
                                <ul className="header--signedout">
                                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                                    <li><NavLink to="/signin">Sign In</NavLink></li>
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



