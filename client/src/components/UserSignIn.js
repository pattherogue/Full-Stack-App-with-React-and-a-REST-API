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
                        </React.Fragment>
                    )}
                >
                    <label for="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value="">
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password" value="">
                    <button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <a href="sign-up.html">sign up</a>!</p>
                
            </div>
        )
    }



}


// provide "Sign In" screen
// user sign in w/ exisiting account information
// render "Sign In" button 
// render "Cancel" button 
// return user to defualt route

export default UserSignIn