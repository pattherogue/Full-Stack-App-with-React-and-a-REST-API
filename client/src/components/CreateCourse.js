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
            <div class="validation--errors">
                <h3>Validation Errors</h3>
                <ul>
                    <li>Please provide a value for "Title"</li>
                    <li>Please provide a value for "Description"</li>
                </ul>
            </div>
            <form>
                <div class="main--flex">
                    <div>
                        <label for="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value="">

                        <p>By Joe Smith</p>

                        <label for="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription"></textarea>
                    </div>
                    <div>
                        <label for="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value="">

                        <label for="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                    </div>
                </div>
                <button class="button" type="submit">Create Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
        </div>
        )
    }
}
// provides "Create Course" screen
// render screen that allows user to create a new course
// render "Create Course" button
// sends POST request to /api/courses route
// render "Cancel" button -- return user to default route


export default CreateCourse