import React, { Component } from 'react';

class Courses extends Component {
    state = {
        courses: [],
    };
    // provide the "Courses" screen
    // retrieve list of courses from /api/courses
    componentDidMount() {
        fetch("http://localhost:5000/ap/courses")
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    courses: responseData.data,
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                })
            });
    }

    render() {
        console.log(this.state.courses);

        return (
            
        )
    }




}

// render list of courses
// link to respective "Course Detail" screen
// component render link to "Create Course" screen 


export default Courses