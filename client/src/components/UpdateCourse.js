import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { Context } from '../Context';
import Form from './Form';
import axios from 'axios';

// provides "Update Course" screen
export default function UpdateCourse() {
    let history = useHistory();
    let context = useContext(Context);
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);
    const authUser = context.authenticatedUser;
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
        .then(course => {
            setTitle(course.data.title);
            setDescription(course.data.description);
            setEstimatedTime(course.data.estimatedTime);
            setMaterialsNeeded(course.data.materialsNeeded);
        })
        .catch(err => {
            console.log('Parsing data and fetching error', err)
        });
    }, [id, history]);

    // render form -- update one existing course
        // render "Update Course" button
        return (
            <div>
                <div class="wrap">
                    <h2>Update Course</h2>
                    <Form
                        cancel={cancel}
                        errors={errors}
                        submit={submit}
                        submitButtonText="Update Course"
                        elements={() => (
                                <React.Fragment>
                                    <div className="main--flex">
                                        <div>
                                            <label htmlFor="courseTitle">Course Title</label>
                                            <input 
                                                id="title" 
                                                name="title" 
                                                type="text" 
                                                value={title}
                                                onChange={change}
                                            />
                                            <p>By {authUser.firstName} {authUser.lastName}</p>

                                            <label htmlFor="description">Course Description</label>
                                            <textarea 
                                                id="description" 
                                                name="description"
                                                type="text"
                                                value={description}
                                                onChange={change}
                                                placeholder={description}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="estimatedTime">Estimated Time</label>
                                            <input 
                                                id="estimatedTime" 
                                                name="estimatedTime" 
                                                type="text" 
                                                value={estimatedTime}
                                                onChange={change}
                                                placeholder={estimatedTime}
                                            />

                                            <label htmlFor="materialsNeeded">Materials Needed</label>
                                            <textarea 
                                                id="materialsNeeded" 
                                                name="materialsNeeded"
                                                type="textarea"
                                                value={materialsNeeded}
                                                onChange={change}
                                                placeholder={materialsNeeded}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                        )}
                    />
                </div>
            </div>
        )
    

    function change (e) {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "courseTitle") {
            setTitle(value);
        } else if (name === "courseDescription") {
            setDescription(value);
        } else if (name === "estimatedTime") {
            setEstimatedTime(value);
        } else if (name === "materialsNeeded") {
            setMaterialsNeeded(value);
        } else {
            return;
        }
    }


    // render "Cancel" button
    function cancel() {
        // return users to "Course Detail" screen
        history.push('/');
    }

    
    // send PUT request to /api/courses/:id
    function submit() {
        const userId = authUser.id;
        const emailAddress = authUser.emailAddress;
        const password = authUser.password;

        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId
        };

        context.data.updateCourse(
            id,
            course,
            emailAddress,
            password
        )
        .then(errors => {
            if (errors) {
                setErrors(errors);
            } else {
                console.log('Course has been updated');
                history.push('/');
            }
        })
        .catch( err => {
            console.log(err);
            history.push('/error');
        });
    }

}
