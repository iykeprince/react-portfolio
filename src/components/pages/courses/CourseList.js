import React from 'react'

const CourseList = ({ title, imageUrl, price, description }) => {
    { }
    return (
        <div>
            <article className="course">
                <div class="paper">
                    <img class="poster" src={imageUrl} alt="" />
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <ul>
                        <li><h2><span>N</span>{price}</h2></li>
                        <li><button>Register</button></li>
                    </ul>
                </div><br /><br />
            </article>


        </div>
    )
}

export default CourseList
