import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Context } from '../Context';
import { Link, useParams, useHistory } from 'react-router-dom';

export default function CourseDetail() {

    let history = useHistory();
    let context = useContext(Context);
    const authUser = context.authenticatedUser
    
    const [course, getCourse] = useState(
        {
            id: "",
            title: "",
            description: "",
            estimatedTime: "",
            materialsNeeded: "",
            User : {
                id: "",
                firstName: "",
                lastName: ""
            }
        }
    );

    const [errors, setErrors] = useState([]);
    const { id } = useParams();
   




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

    function deleteCourse() {
        let emailAdress = authUser.emailAddress;
        let password = authUser.password;

        context.data.deleteCourse(id, emailAdress, password)
            .then( errors => {
                if(errors) {
                    console.log(`Course not deleted: ${errors}`);
                } else {
                    console.log('Course deleted');
                    history.push('/');
                }
            })
            .catch((err) => {
                
            })
    }

    context.data.updateCourse(id, course, authUser.emailAddress, authUser.password)
    .then( errors => {
        if (errors) {
            setErrors(errors);
        } else {
            console.log('Course updated');
            history.push('/');    
        }
    })
    .catch((err) => {
        console.log(err);
        history.push('/error');
    });

        return (
            // render "Delete Course" button
            // send "DELETE" request to /api/courses/:id
            // render "Update Course" 
            <div>
                <div className="actions--bar">
                    <div className="wrap">
                        {(authUser && authUser.id === course.User?.id) ? (
                            <React.Fragment>
                                <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
                                <Link className="button" to="#" onClick={{deleteCourse}}>Delete Course</Link>
                                <Link className="button button-secondary" to="/">Return to List</Link>
                            </React.Fragment>
                            ):
                            <Link className="button button-secondary" to="/">Return to List</Link>
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
                                    <p>By {course.User?.firstName} {course.User?.lastName}</p>
                                    <p> {course.description} </p>
                                    <ReactMarkdown>{course.description}</ReactMarkdown>
                                </div>

                                <div>
                                    <h3 className="course--detail--title">Estimated Time</h3>
                                    <p> {course.estimatedTime} </p>
                                        <ReactMarkdown>
                                            {course.estimatedTime}
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
        );
}






