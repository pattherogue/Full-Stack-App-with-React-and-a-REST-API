import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router';

class CourseDetail extends Component {

    constructor() {
        super();
        this.state = {
            course: [],
            courseOwner: []
        };

        
    }

    /* id: this.props.match.params.id, */

    // provide the "Course Detail" screen
   
    componentDidMount() {
        const { id } = useParams();
            this.setState({ loading: true });
        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(response => {
                if (response.status === 403) {
                    this.props.history.push('/forbidden');
                } else if (response.status === 404) {
                    this.props.history.push('/notfound');
                } else if (response.status === 500) {
                    this.props.history.push('/error');
                    throw new Error();
                } else {
                    return response.json()
                }
            })
                .then(data => {
                    // retrieve detail from course from /api/courses/:id
                    this.setState({
                        course: data.course,
                        courseOwner: data.course.Owner,
                    })
                })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        const { context } = this.props;
        const { course, id, owner } = this.state;
        const authenticatedUser = context.authenticatedUser;

        return (
            // render "Delete Course" button
            // send "DELETE" request to /api/courses/:id
            // render "Update Course" 
            <div>
                <div className="actions--bar">
                    <div className="wrap">
                        {(
                            authenticatedUser && course.userId === authenticatedUser.userId
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
                                    <p>By {owner.firstName} {owner.lastName}</p>
                                    <p> {this.state.description} </p>
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
                                            {this.state.materialsNeeded}
                                        </ReactMarkdown>

                                </div>
                            </div>
                        </form>
                </div>
            </div>
        )
    }



}


export default CourseDetail