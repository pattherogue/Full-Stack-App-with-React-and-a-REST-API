import React, { Component } from 'react';
import axios from 'axios';

class CourseDetail extends Component {

    constructor() {
        super();
        this.state = {
            course: [],
            id: this.props.match.params.id,
            courseOwner: []
        };
    }

    // provide the "Course Detail" screen
   
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/courses/${this.state.id}`)
            .then(response => {
                if (response.status === 403) {
                    this.props.history.push('/forbidden');
                } else if (response.status === 404) {
                    this.props.history.push('/notfound');
                } else if (response.status === 500) {
                    this.props.history.push('/error');
                } else {
                    throw new Error();
                }
                // retrieve detail from course from /api/courses/:id
                this.setState({
                    course: data.course,
                    courseOwner: data.course.Owner,
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        <div class="actions--bar">
            <div class="wrap">
                <React.Fragment>
                    <a className="button" href={`/courses/${this.state.id}/update`}>Update Course</a>
                    <a className="button" href={`/courses/${this.state.id}/delete`}>Delete Course</a>
                    <a className="button button-secondary" href="/">Return to List</a>
                </React.Fragment>
            </div>
        </div>

        <div className="wrap">
        <h2>Course Detail</h2>
        <form>
        
        <div className="main--flex">
            <div>
                <h3 className="course--detail--title">Course</h3>
                <h4 className="course--name">{this.state.title}</h4>
                <p>By {this.state.firstName} {this.state.lastName}</p>
                <p> {this.state.description} </p>
            </div>
        <div>
                    <h3 className="course--detail--title">Estimated Time</h3>
                    <p> {this.state.estimatedTime} </p>
                        <ReactMarkdown>
                            <p> {this.state.estimatedTime} </p>
                        </ReactMarkdown>
                    <h3 className="course--detail--title">Materials Needed</h3>
                    <ul className="course--detail--list">
                    
                </div>
            </div>
        </form>
        </div>
    }



}

// render "Delete Course" button
// send "DELETE" request to /api/courses/:id
// render "Update Course" 

export default CourseDetails