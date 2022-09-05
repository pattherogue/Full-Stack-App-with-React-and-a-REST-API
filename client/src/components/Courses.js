import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Courses() {
    const [ courses, setCourses ] = useState([]);
    // provide the "Courses" screen
    // retrieve list of courses from /api/courses
    useEffect(()=> {
        axios.get("http://localhost:5000/api/courses")
            .then(courses => {
                setCourses(courses.data)
            })
            .catch((error) => {
                console.log('Error fetching data', error);
            });
    }, []);
        

    

    return (
        // render list of courses
        <main>
            <div className="wrap main--grid">
                {courses.map(course => {
                    
                    // link to respective "Course Detail" screen
                    return (
                        <Link className="course--module course--link" to={`/courses/${course.id}`}>
                            <h2 className="course--label">Course</h2>
                            <h3 className="course--title">{course.title}</h3>
                        </Link>
                    );
                })}

                 
                <Link className="course--module course--add--module" to="/courses/create">
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </Link>
            </div>
        </main>
            
        
    );
}

