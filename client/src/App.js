import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from "./components/Header";
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';


import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignOut from './components/UserSignOut';


import withContext from "./Context";
import PrivateRoute from "./PrivateRoute";

const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignUpWithContext = withContext(UserSignUp);
const CreateCourseWithContext = withContext(CreateCourse);
const UserSignInWithContext = withContext(UserSignIn);
const UpdateCourseWithContext = withContext(UpdateCourse);
const UserSignOutWithContext = withContext(UserSignOut);

const App = () => (
  <Router>
    <HeaderWithContext />
      <Route>
        <Route exact path="/" component={CoursesWithContext} />
        <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
        <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
      </Route>
  </Router>

);
export default App;
