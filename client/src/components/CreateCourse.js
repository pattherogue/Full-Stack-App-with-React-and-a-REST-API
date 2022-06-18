import React, { Comppnent } from 'react';

class CreateCourse extends Comppnent {
    state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    }

    render() {
        const {
           title,
            description,
            estimatedTime,
            materialsNeeded,
            errors
        } = this.state;

        return (
            <div class="wrap">
            <h2>Create Course</h2>
            <Form
                cancel={this.cancel}
                errors={errors}
                sumit={this.submit}
                submitButtonText="Create Course"
                elements={() => (
                    <React.Fragment>
                        <div className="main--flex">
                            <div>
                                <label htmlFor="courseTitle">Course Title</label>
                                <input 
                                    id="title" 
                                    name="title" 
                                    type="text"
                                    onChange={this.onChange} 
                                    value={title}
                                />

                                <label htmlFor="description">Course Description</label>
                                <textarea 
                                    id="description" 
                                    name="description"
                                    type="text"
                                    onChange={this.change}
                                    value={description}

                                />
                            </div>
                            <div>
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input 
                                    id="estimatedTime" 
                                    name="estimatedTime" 
                                    type="text" 
                                    onChange={this.change}
                                    value={estimatedTime}
                                />

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea 
                                    id="materialsNeeded" 
                                    name="materialsNeeded"
                                    type="text"
                                    onChange={this.change}
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

    change = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    submit = () => {
        const { context } = this.props;
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded
        } = this.state;

        const course = {
            title,
            
        }
    }
            
    
    }
}
// provides "Create Course" screen
// render screen that allows user to create a new course
// render "Create Course" button
// sends POST request to /api/courses route
// render "Cancel" button -- return user to default route


export default CreateCourse