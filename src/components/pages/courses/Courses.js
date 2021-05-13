import '../courses/Courses.css';
import { useEffect, useSate, useState } from 'react';
const Courses = () => {
    const [courses, setCourses] = useState([
        {
            title: "HTML for beginners",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            description: "This course will put you up to speed for front-end development",
            price: 10500,
            id: 1
        },
        {
            title: "Flutter for beginners",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            description: "This course will put you up to speed for front-end development",
            price: 20000,
            id: 2
        },
        {
            title: "Flutter for beginners",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            description: "This course will put you up to speed for front-end development",
            price: 20000,
            id: 3
        },
        {
            title: "Python for Data Science",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://mdbcdn.b-cdn.net/wp-content/uploads/2019/01/html.jpg",
            description: "This course will put you up to speed for front-end development",
            price: 20000,
            id: 4
        }

    ])

    // useEffect(() => {
    //     fetch()
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setCourses(data);
    //         });
    // }, []);
    return (
        <span>
            <h2 id="course">Virtual training</h2>
            <div className="course-page">
                {courses.map((course) => (
                    <div className="product" key={course.id}>
                        <figure>
                            <img src={course.imageUrl} alt="Product Image" className="product-image" />
                        </figure>

                        <div className="product-description">
                            <div className="info">
                                <h1 className="title">{course.title}</h1>
                                <p>{course.description}</p>
                            </div>
                            <div className="price">{course.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </span>
    )
}

export default Courses
