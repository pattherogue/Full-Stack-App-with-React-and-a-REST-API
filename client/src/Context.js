import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

const Context = React.createContext();

export class Provider extends Component {
    
    constructor() {
        super();
        this.data = new Data();
        this.cookie = Cookies.get('authenticate4dUser');
    }
]

