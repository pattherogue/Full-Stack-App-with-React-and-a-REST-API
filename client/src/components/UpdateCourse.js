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

        response => {
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
    };

    // render form -- update one existing course
    render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors
        } = this.state

        // render "Update Course" button
        return (
            <div>
                <div class="wrap">
                    <h2>Update Course</h2>
                    <div
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
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
                                                onChange={this.change}
                                                placeholder={title}
                                            />

                                            <label htmlFor="description">Course Description</label>
                                            <textarea 
                                                id="description" 
                                                name="description"
                                                type="textarea"
                                                value={description}
                                                onChange={this.change}
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
                                                onChange={this.change}
                                                placeholder={estimatedTime}
                                            />

                                            <label htmlFor="materialsNeeded">Materials Needed</label>
                                            <textarea 
                                                id="materialsNeeded" 
                                                name="materialsNeeded"
                                                type="textarea"
                                                value={materialsNeeded}
                                                onChange={this.change}
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

        this.setState(() => {
            return {
                [ name ]: value
            }
        })
    }
    
    // send PUT request to /api/courses/:id
    submit = () => {
        const { context } = this.props;
        const authenticatedUser = context.authenticatedUser;
        const id = this.props.match.params.id;

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
    cancel = () => {
        // return users to "Course Detail" screen
        this.props.history.push(`/courses/${this.state.id}`);
    }
}

