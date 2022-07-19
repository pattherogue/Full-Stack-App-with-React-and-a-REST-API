import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from "./components/Header";
import CourseDetail from './components/CourseDetail';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';

const HeaderWithContext = HeaderWithContext(Header);
const CourseWithContext = withContext(Course);
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
        
      </Switch>
  </Router>

);
export default App;
