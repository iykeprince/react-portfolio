import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import Home from "./home/Home";
import Mailing from "../components/mailingSection/Mailing";
import UseFetch from "./UseFetch";
import CourseDetails from "./courseDetails/CourseDetails";

function App() {
  // const LOCAL_STORAGE_KEY = 'courses';
  const { data: courses } = UseFetch("http://localhost:8000/courses");
  //addCourse Logic
  // function addCourseHandler(course){
  //   setCourses([...courses, { id: new Date().getTime().toString(), ...course }]);

  // }

  //fetching from local storage
  // useEffect(() => {
  //     const retrieveCourses = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //     if (retrieveCourses) {
  //         setCourses(retrieveCourses);
  //     }
  // }, []);

  //storing the data into the local storage
  // useEffect(() => {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(courses));

  // }, [courses]);
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} courses={courses} />}
            />
            {/* <Route exact path='/courses' render={props => <h1>Courses</h1>} /> */}
            <Route path="/course/:id" component={CourseDetails} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>

          <Mailing />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
