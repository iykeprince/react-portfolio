import '../courses/Courses.css';
import { useEffect, useState } from 'react';
import React from 'react'
import CourseList from '../courses/CourseList';


const Courses = () => {
    const [courses, setCourses] = useState([
        {
            title: "HTML for beginners",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://s3.us-east-1.amazonaws.com/storage.trumplearning.com/cmsfiles/best-python-online-courses-certification-training-yowkvfja.jpg",
            description: "This course will put you up to speed for front-end development",
            price: '10,500',
            id: 1
        },
        {
            title: "Flutter for beginners",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://www.filepicker.io/api/file/sXz6u6kMQzK9uXkCwtPv",
            description: "This course will put you up to speed for front-end development",
            price: '20,000',
            id: 2
        },
        {
            title: "Flutter for beginners",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://html.com/wp-content/uploads/html-hpg-featured-new.png",
            description: "This course will put you up to speed for front-end development This course will put you up to speed for front-end development",
            price: '20,000',
            id: 3
        },
        {
            title: "Python for Data Science",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit",
            imageUrl: "https://mdbcdn.b-cdn.net/wp-content/uploads/2019/01/html.jpg",
            description: "This course will put you up to speed for front-end development",
            price: '20,000',
            id: 4
        }

    ])
    return (
        <div>
            <h2 className="heading-courses">Popular Courses</h2>
            <hr className="style-seven"/>
            <section className="courses">
                {courses.map((course) => {
                    return <CourseList  key={course.id} {...course} />
                })}

            </section>
            
        </div>
            
    )
}

export default Courses

    
