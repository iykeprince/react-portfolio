import '../about/About.css';

const About = ({ title, src }) => {
    return (
        <div className="post" id="about">
            <div className="post-left">
                <div className="post-left_title">{title}</div>
                     <div className="post-left_border">
                         <p>Some of the most successful people in the world are self-taught programmers. Steve Wozniak, the founder of Apple, David Karp, founder of Tumblr; Jack Dorsey, founder of Twitter; and Kevin Systrom, founder of Instagram. You too can become one!</p>
                     </div>
                <div className="post-left_author">
                    <img src={src} alt="" />
                    <p>Dennis Akagha</p>
                </div>
            </div>
            <div className="post-right">
                <div className="post-right_body">
                    <p><span>M</span>y specialty include quickly learning new skills and programming languages, problem solving, data cleaning and visualisation. So far I have HTML, CSS, Python for Data Science, Dart, and Flutter for Mobile Application under my belt. This website is a product of my learning JavaScript and React.js. </p>
                    <p>I am still very enthusiastic grabbing any other programming languages, and frameworks. Programming is the only job I can think of where I get to be both an engineer and an artist. There's an incredible, rigorous, technical element to it, which I like because you have to do very precise thinking. On the other hand, it has a wildly creative side where the boundaries of imagination are the only real limitation.</p>
                    

                </div>
            </div>
            
        </div>

    )
}

export default About



