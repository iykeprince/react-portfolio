import './Home.css';
import Footer from '../footer/Footer';
import About from '../pages/about/About';
import images from '../images/dennis.jpg';
import Courses from '../pages/courses/Courses';
import Portfolio from '../pages/portfolio/Portfolio';

const Home = () => {
    return (
        <div className="container">
            {/* <h1>This is my portfolio and blog</h1> */}
            <div className="hero-image">
                <div className="hero-text">
                    <div className="hero">
                        <h2>Let's help you grow your tech skills</h2>
                        {/* <h3>I am a freelancer</h3> */}
                        {/* <button className="btn">Hire Me</button> */}
                    </div>
                </div>
            </div>
            {/* <About title="About Me" src={images}/>
            <Portfolio />
            <Courses /> */}
        </div>
    )
}

export default Home
