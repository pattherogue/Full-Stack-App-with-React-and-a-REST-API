import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
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
                                    <li><Link to="/signout">Sign Out</Link></li>
                                </ul>
                            </React.Fragment> 
                        ) : (
                            // sign out button (if authenticated user)
                            <React.Fragment>
                                <ul className="header--signedout">
                                    <li><Link to="/signup">Sign Up</Link></li>
                                    <li><Link to="/signin">Sign In</Link></li>
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



