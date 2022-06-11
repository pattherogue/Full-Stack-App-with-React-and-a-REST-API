import React, { Comppnent } from 'react';

class CreateCourse extends Comppnent {
    state = {
        title: '',
        description: '',
        estimatedTime: '',
    }
}
// provides "Create Course" screen
// render screen that allows user to create a new course
// render "Create Course" button
// sends POST request to /api/courses route
// render "Cancel" button -- return user to default route


export default CreateCourse