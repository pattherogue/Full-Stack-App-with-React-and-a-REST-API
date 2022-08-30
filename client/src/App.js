import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import Header from "./components/Header";
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
      <Switch>
        <Route exact path="/" component={CoursesWithContext} />
        <PrivateRoute exact path="/courses/create" component={CreateCourseWithContext } />
        <PrivateRoute exact path="/courses/:id/update" component={UpdateCourseWithContext } />
        <Route path="/courses/:id" component={CourseDetailWithContext } />
        <Route path="/signin" component={UserSignInWithContext } />
        <Route path="/signup" component={UserSignUpWithContext } />
        <Route path="/signout" component={UserSignOutWithContext } />
      </Switch>
  </Router>

);
export default App;
