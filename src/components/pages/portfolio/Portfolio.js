import '../portfolio/Portfolio.css'
const Portfolio = ({ portfolio1, portfolio2, portfolio3, portfolio4 }) => {
    return (
        <div className="main" id="portfolio">
            <h2>My Portfolio</h2>
            <div className="wrap">
                <div className="row">
                    <div className="column">
                        <div className="content">
                            <img src={portfolio1} alt="portfolio1" style={{ width: '100%' }} />
                            <h3>E-commerce Application</h3>
                            <p>This mobile application is built on flutter with responsive designs</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <img src={portfolio2} alt="portfolio2" style={{ width: '100%' }} />
                            <h3>My Work</h3>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <img src={portfolio3} alt="portfolio3" style={{ width: '100%' }} />
                            <h3>My Work</h3>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <img src={portfolio4} alt="portfolio4" style={{ width: '100%' }} />
                            <h3>My Work</h3>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio
