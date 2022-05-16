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
    // retrieve detail from course from /api/courses/:id
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

                this.setState({
                    course: response.data,
                    courseOwner: response.data.User
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
}

// render "Delete Course" button
// send "DELETE" request to /api/courses/:id
// render "Update Course" 

export default CourseDetails