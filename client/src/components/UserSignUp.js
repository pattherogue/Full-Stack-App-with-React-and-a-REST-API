import React, { Component } from 'react';

class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    }

    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            error
        } = this.states;

        return(
            <div className="form--centered">
            <h2>Sign Up</h2>
            
            <form
                cancel={this.cancel}
                errors={errors}
                submit={this.submit}
                submitButtonText="Sign Up"
                elements={() => (
                    <React.Fragment>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={firstName}
                            onChange={this.change}
                            placeholder="First Name"
                        />

                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={lastName}
                            onChange={this.change}
                            placeholder="Last Name"
                        />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={this.change}
                            placeholder="Password"
                        />
                    </React.Fragment>
                )}
            />

            <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
        </div>
        )
}

change = e => {
    
}

// provides "Sign Up" screen 
// render form - allow user to sign up
// render "Sign Up" button
// send post request tp /api/users
// sign in user
// render "Cancel" button

export default UserSignUp