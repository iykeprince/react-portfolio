import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import Courses from './pages/courses/Courses';
import About from './pages/about/About';
import Home from './home/Home';
import images from '../components/images/dennis.jpg';
import portfolio1 from '../components/images/portfolio1.jpg';
import portfolio2 from '../components/images/portfolio2.jpg';
import portfolio3 from '../components/images/portfolio3.jpg';
import portfolio4 from '../components/images/portfolio4.jpg';
import Mailing from '../components/mailingSection/Mailing';


// import Courses from './pages/Courses';


function App() {
  return (
    <div>
      <NavBar />
      {/* <Switch> */}
      <Home path="/" exact component={Home} />
      {/* <Route path="/blog" exact component={Blogs} /> */}
      {/* </Switch> */}
      <About title="About Me" src={images} />
      <Portfolio portfolio1={portfolio1} portfolio2={portfolio2} portfolio3={portfolio3} portfolio4={portfolio4} />
      <Courses />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
