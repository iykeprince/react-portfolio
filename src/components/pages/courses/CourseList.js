import '../courses/Courses.css';
import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
    // const {title, imageUrl, price, description} = course;
        return (
        <article className="course">
            <div className="paper">
                <img className="poster" src={course.imageUrl} alt="" />
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <ul>
                    <li><h2><span>N</span>{course.price}</h2></li>
                    <Link to={`/course/${course.id}`}>
                    <li><button>Register</button></li> 
                    </Link>
                             
                </ul>
            </div><br /><br />
        </article>
    )
}

export default CourseList
