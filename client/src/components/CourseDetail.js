import React, { Component } from 'react';
import axios from 'axios';

class CourseDetail extends Component {

    constructor() {
        super();
        this.state = {
            course: [],
            id: this.props.match.params.id,
            courseOwner: []
        };
    }

    // provide the "Course Detail" screen
   
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/courses/${this.state.id}`)
            .then(response => {
                if (response.status === 403) {
                    this.props.history.push('/forbidden');
                } else if (response.status === 404) {
                    this.props.history.push('/notfound');
                } else if (response.status === 500) {
                    this.props.history.push('/error');
                } else {
                    throw new Error();
                }
                // retrieve detail from course from /api/courses/:id
                this.setState({
                    course: data.course,
                    courseOwner: data.course.Owner,
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        <div class="actions--bar">
        <div class="wrap">
            <a class="button" href="update-course.html">Update Course</a>
            <a class="button" href="#">Delete Course</a>
            <a class="button button-secondary" href="index.html">Return to List</a>
        </div>
    </div>
    }



}

// render "Delete Course" button
// send "DELETE" request to /api/courses/:id
// render "Update Course" 

export default CourseDetails