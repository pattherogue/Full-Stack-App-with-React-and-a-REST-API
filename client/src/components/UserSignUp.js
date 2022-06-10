import React, { Component } from 'react';

class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    }

    // provides "Sign Up" screen 
    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            error
        } = this.states;

        // render form - allow user to sign up
        // render "Sign Up" button
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
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => {
        return {
            [ name ]: value
        }
    })
}

submit = () => {
    const { context } = this.props
    const {
        firstName,
    }
    const user = {
        firstName,
        lastName,
        emailAddress,
        password
    } 

    // sign in user
    // send post request tp /api/users
    context.data.createUser(user)
    .then(errors => {
        if(errors.length) {
            this.setState({ errors })
        } else {
            context.actions.signIn(emailAddress, password)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(error => {
                this.props.history.push('/error');
            });
        }
    })
    // render "Cancel" button
    cancel = () => {
        this.props.history.push('/');
    }
}





export default UserSignUp