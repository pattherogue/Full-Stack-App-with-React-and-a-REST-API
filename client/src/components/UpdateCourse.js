import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom;'
import { Context } from '../Context';
import Form from './Form';
import Axios from 'axios';

// provides "Update Course" screen
export default function UpdateCourse {
    let history = useHistory();
    let context = useContext(Context);
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDecription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);
    const authUser = context.authenticatedUser;
    
    useEffect(() => {
        Axios.get(`http://localhost:5000/api/courses/${id}`)
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

       /* response => {
            this.setState({
                course: response.data,
                owner: response.data.owner,
                title: response.data.title,
                description: response.data.description,
                estimatedTime: response.data.estimatedTime,
                materialsNeeded: response.data.materialsNeeded
            });
        })
        .catch(err => {
            console.error(err);
            this.props.history.push("/notfound");
        });
        console.log(this.state.course);
    }; */

    // render form -- update one existing course
   /*  render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors
        } = this.state */

        // render "Update Course" button
        return (
            <div>
                <div class="wrap">
                    <h2>Update Course</h2>
                    <div
                        cancel={cancel}
                        errors={errors}
                        submit={submit}
                        submitButtonText="Update Course"
                        elements={() => (
                            <div>
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
                                                placeholder={title}
                                            />

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
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }

    change = e => {
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
    
    // send PUT request to /api/courses/:id
    function submit() {
        const userId = authUser.id;
        const emailAddress = authUser.emailAddress;
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded
        } = this.state;

        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded
        }

        context.data.updateCourse(
            id,
            course,
            authenticatedUser.emailAddress,
            authenticatedUser.password
        )
        .then(errors => {
            if (errors.length) {
                this.setState({ errors });
            } else {
                this.props.history.push(`/courses/${id}`);
            }
        })
        .catch( error => {
            console.log(error);
            this.props.history.push('/error');
        })
    }

    // render "Cancel" button
    function cancel() {
        // return users to "Course Detail" screen
        history.push('/');
    }
}

