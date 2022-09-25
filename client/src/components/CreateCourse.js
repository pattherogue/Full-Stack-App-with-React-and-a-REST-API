import React, { useContext, useState } from 'react';
import Form from './Form';
import { Context } from '../Context';
import { useHistory } from "react-router-dom";

function CreateCourse() {
    let history = useHistory();
    const context = useContext(Context);
    const authUser = context.authenticatedUser;


    // render "Create Course" button
    const [title,  setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [materialsNeeded, setMaterialsNeeded] = useState("");
    const [errors, setErrors] = useState("");


// provides "Create Course" screen

   /* const state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    } */

    // sends POST request to /api/courses route
    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "title") {
            setTitle(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "estimatedTime") {
            setEstimatedTime(value);
        } else if (name === "materialsNeeded") {
            setMaterialsNeeded(value);
        }
    };

   /*n const change = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => {
            return {
                [name]: value
            }
        })
    } */

    const submit = () => {
        
        const emailAddress = authUser.emailAddress;
        const password = authUser.password;
        const userId = authUser.id;

        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId
        };

        context.data.createCourse(
            course,
            emailAddress,
            password
        )
            .then(errors => {
                if (errors.length) {
                    setErrors(errors)
                } else {
                    history.push("/")
                }
            })
            .catch(errors => console.log(errors));
    };
    
    // render "Cancel" button -- return user to default route
   const cancel = () => {
        history.push("/")
    }
    
        // render screen that allows user to create a new course
        return (
            <div class="wrap">
            <h2>Create Course</h2>
            <Form
                cancel={cancel}
                errors={errors}
                submit={submit}
                submitButtonText="Create Course"
                elements={() => (
                    <React.Fragment>
                        <div className="main--flex">
                            <div>
                                <label htmlFor="title">Course Title</label>
                                <input 
                                    id="title" 
                                    name="title" 
                                    type="text"
                                    onChange={change} 
                                    value={title}
                                />

                                <label htmlFor="description">Course Description</label>
                                <textarea 
                                    id="description" 
                                    name="description"
                                    type="text"
                                    onChange={change}
                                    value={description}

                                />
                            </div>
                            <div>
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input 
                                    id="estimatedTime" 
                                    name="estimatedTime" 
                                    type="text" 
                                    onChange={change}
                                    value={estimatedTime}
                                />

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea 
                                    id="materialsNeeded" 
                                    name="materialsNeeded"
                                    type="text"
                                    onChange={change}
                                    value={materialsNeeded}
                                />
                            </div>
                        </div>
                    </React.Fragment>
                )}
            />
        </div>
        );
    }    

    



export default CreateCourse;