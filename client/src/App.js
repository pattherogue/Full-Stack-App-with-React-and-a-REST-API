import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
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
// import PrivateRoute from "./PrivateRoute";

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
      <Routes>
        <Route exact path="/" element={<CoursesWithContext />} />
        <Route path="/courses/create" component={CreateCourseWithContext} />
        <Route path="/courses/:id/update" component={UpdateCourseWithContext} />
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/signin" element={<UserSignInWithContext />} />
        <Route path="/signup" element={<UserSignUpWithContext />} />
        <Route path="/signout" component={UserSignOutWithContext} />
      </Routes>
  </Router>

);
export default App;
