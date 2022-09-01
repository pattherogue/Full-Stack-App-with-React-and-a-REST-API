import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router';
import { Context } from '../Context';

export default function CourseDetail() {


    let context = useContext(Context);
    const { id } = useParams();
    const authUser = context.authenticatedUser;
    const [ course, getCourse ] = useState({
        course: [],
        title: " ",
        description: " ",
        estimatedTime: " ",
        materialsNeeded: " ",
        firstName: " ",
        lastName: " "
    });




    /* id: this.props.match.params.id, */

    // provide the "Course Detail" screen
   
    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(course => {
                // retrieve detail from course from /api/courses/:id
                getCourse(course.data)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }, [id]);

        return (
            // render "Delete Course" button
            // send "DELETE" request to /api/courses/:id
            // render "Update Course" 
            <div>
                <div className="actions--bar">
                    <div className="wrap">
                        {(
                            authUser && course.userId === authUser.userId
                        ) ? (
                                <React.Fragment>
                                    <a className="button" href={`/courses/${id}/update`}>Update Course</a>
                                    <a className="button" href={`/courses/${id}/delete`}>Delete Course</a>
                                    <a className="button button-secondary" href="/">Return to List</a>
                                </React.Fragment>
                            ) : (
                                null
                            )
                        }
                    </div>
                </div>
                
                <div className="wrap">
                        <h2>Course Detail</h2>
                        <form>
                            <div className="main--flex">
                                <div>
                                    <h3 className="course--detail--title">Course</h3>
                                    <h4 className="course--name">{course.title}</h4>
                                    <p>By {course.firstName} {course.lastName}</p>
                                    <p> {course.description} </p>
                                    <ReactMarkdown>{course.description}</ReactMarkdown>
                                </div>

                                <div>
                                    <h3 className="course--detail--title">Estimated Time</h3>
                                    <p> {this.state.estimatedTime} </p>
                                        <ReactMarkdown>
                                            {this.state.estimatedTime}
                                        </ReactMarkdown>
                                    <h3 className="course--detail--title">Materials Needed</h3>
                                        <ReactMarkdown>
                                            {course.materialsNeeded}
                                        </ReactMarkdown>

                                </div>
                            </div>
                        </form>
                </div>
            </div>
        )
    }






