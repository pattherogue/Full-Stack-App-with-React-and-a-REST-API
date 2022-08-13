import React, { Component } from 'react';
import Form from './Form';

// provide "Sign In" screen
class UserSignIn extends Component {
    state = {
        emailAddress: '',
        password: '',
        errors: []
    }
    // user sign in w/ exisiting account information
    render() {
        const {
            emailAddress,
            password,
            errors
        } = this.state;
        // render "Sign In" button 
        return(
            <div className="form--centered">
                <h2>Sign In</h2>
                
                <Form
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

                <p>Don't have a user account? Click here to <a href="/signup">sign up</a>!</p>
                
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
                this.props.history.push('/error');
            }

            )
    }
    // render "Cancel" button 
    // return user to defualt route
    cancel = () => {
        this.props.history.push('/');
    }
}

export default UserSignIn