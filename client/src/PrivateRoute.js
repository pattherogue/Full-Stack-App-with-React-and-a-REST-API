import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Contet';

const privateRoute = ({ component: Component, ...rest }) => {
    return (
        <Consumer>
            {context => (

            ) : (
                
            )}
        </Consumer>
    )
}