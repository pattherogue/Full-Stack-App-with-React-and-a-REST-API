import React, { Component } from 'react';
import axios from 'axios';

class CourseDetail extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(``)
    }
}
// provide the "Course Detail" screen
// retrieve detail fro course from /api/courses/:id
// render "Delete Course" button
// send "DELETE" request to /api/courses/:id
// render "Update Course" 

export default CourseDetails