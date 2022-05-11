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

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/courses/${this.state.id}`)
            .then(response => {
                this.setState({
                    course: response.data,
                    
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