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
        const courses = this.state.courses;

        // render list of courses
        const coursesList = courses.map((course) => {
         
            return (
                <a key={course.id} className="course--module course--link" href={`/courses/${course.id}`}>
                    <h2 className="course--label">Course</h2>
                    <h3 className="course--title">{course.title}</h3>
                </a>
            )
        });

       
            return (
                <div className="wrap main--grid">
                    {coursesList}
                    <a class="course--module course--add--module" href="/courses/create">
                        <span class="course--add--title">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                            New Course
                        </span>
                    </a>
                </div>
            ) 



          
          
        
    }



}

   // render list of courses
// link to respective "Course Detail" screen

// component render link to "Create Course" screen 


export default Courses