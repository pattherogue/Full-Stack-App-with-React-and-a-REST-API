import React, { Component } from 'react';
import Axios from 'axios';

export default class UpdateCourse extends Component {
    state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        id: this.props.match.params.id,
        errors: [],
    }

    render() {
        const {
            title,
            description,
            

        }
    }
}
// provides "Update Course" screen
// render form -- update one existing course
// render "Update Course" button
// send PUT request to /api/courses/:id
// render "Cancel" button
// return users to "Course Detail" screen
