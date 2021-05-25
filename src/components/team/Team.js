import React from 'react'
import '../team/Team.css'
import image12 from '../images/image12.jpg'
import image123 from '../images/image123.jpeg'
import image1234 from '../images/image1234.jpeg'


const Team = () => {
    return (
        <article className="article">
            <h1>Our Mentors</h1>
            <div className="team">
                <div className="team_member">
                    <div className="team_img">
                        <img src={image12} alt="Team_image" />
                    </div>
                    <h3>Dennis Akagha</h3>
                    <p className="role">Software developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
                <div className="team_member">
                    <div className="team_img">
                        <img src={image123} alt="Team_image" />
                    </div>
                    <h3>John Doe</h3>
                    <p className="role">Software Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
                <div className="team_member">
                    <div className="team_img">
                        <img src={image1234} alt="Team_image" />
                    </div>
                    <h3>Jane Doe</h3>
                    <p className="role">Software Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
            </div>
            
        </article>
    )
}

export default Team
