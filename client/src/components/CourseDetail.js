import React, { Component } from 'react';
import axios from 'axios';

class CourseDetail extends Component {

    constructor() {
        super();
        this.state = {
            course: [],
            id: this.props.match.params.id,
        };
    }

    componentDidMount() {
        axios.get(``)
            .then(response => {
                this.setState({

                })
            })
    }
}
// provide the "Course Detail" screen
// retrieve detail from course from /api/courses/:id
// render "Delete Course" button
// send "DELETE" request to /api/courses/:id
// render "Update Course" 

export default CourseDetails