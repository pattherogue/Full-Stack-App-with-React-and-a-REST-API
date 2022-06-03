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
                    </React.Fragment>
                )}
            >
                <label for="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" value="">
                <label for="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" value="">
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value="">
                <label for="password">Password</label>
                <input id="password" name="password" type="password" value="">
                <button class="button" type="submit">Sign Up</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
            <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
        </div>
        )
}


// provides "Sign Up" screen 
// render form - allow user to sign up
// render "Sign Up" button
// send post request tp /api/users
// sign in user
// render "Cancel" button

export default UserSignUp