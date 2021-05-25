import './Home.css';
import '../pages/courses/Courses.css'
import Team from '../team/Team';
import CourseList from '../pages/courses/CourseList'
import NavBar from '../navbar/NavBar';


const Home = ({ courses }) => {

    return (
        <>
        <NavBar />
        <div className="home">
            <div className="hero-image">
                <div className="hero-text">
                    <div className="hero">
                        <h2>Learn, Build, Grow</h2>
                    </div>
                </div>
            </div>
            <h2 className="heading-courses">Popular Courses</h2>
            <section className="courses">
                {courses.map((course) => {
                    return <CourseList course={course} key={course.id} />
                })}
                {/* < Courses courses={courses}/> */}
            </section>
            <Team />
        </div>
        </>
    )
}

export default Home
