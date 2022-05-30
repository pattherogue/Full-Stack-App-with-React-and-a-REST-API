import React, { Component } from 'react';

class UserSignIn extends Commponent {
    state = {
        emailAddress: '',
        password: '',
        errors: []
    }

    render() {
        const {
            emailAddress,
            password,
            errors
        } = this.state;

        return(
            <div className="form--centered">
                <h2>Sign In</h2>
                
                <form
                    cancel={this.cancel}
                    errors={errors}
                    submit={this.submit}
                    submitBUttonText="Sign In"
                    elements={() => (
                        <React.Fragment>
                            <label htmlFor="emailAddress"></label>
                            <input
                                id="emailAddress"
                                name="emailAddress"
                                type="text"
                                value={emailAddress}
                                onChange={this.change}
                            />
                            
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={this.change}
                            />
                        </React.Fragment>
                    )}
                />

                <p>Don't have a user account? Click here to <Link to="/sign-up.html">sign up</Link>!</p>
                
            </div>
        )
    }

    change = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState( () => {
            return {
                [ name ]: value
            }
        })
    }

    submit = () => {
        const { context } = this.props;
        const { from } = this.props.location.state;
        const { emailAddress, password } = this.state;

        context.actions.signIn(emailAddress, password)
            .then( user => {
                if ( user === null ) {
                    this.setState(() => {
                        return { errors: ['Unsucessful sign-in']};
                    });
                } else {
                    this.props.history.push(from);
                }
            })
            .catch( error => {
                console.log(error);
            }

            )
    }



}


// provide "Sign In" screen
// user sign in w/ exisiting account information
// render "Sign In" button 
// render "Cancel" button 
// return user to defualt route

export default UserSignIn