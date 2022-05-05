import React, { Component } from 'react';

class Courses extends Component {
    state = {
        courses: [],
    };

    componentDidMount() {
        fetch("http://localhost:5000/ap/courses")
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    courses: responseData.data,
                })
                .catch(error => {
                    
                })
            });
    }




}
// provide the "Courses" screen
// retrieve list of courses from /api/courses
// render list of courses
// link to respective "Course Detail" screen
// component render link to "Create Course" screen 


export default Courses