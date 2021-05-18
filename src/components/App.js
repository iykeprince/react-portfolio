import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import Home from './home/Home';
import Mailing from '../components/mailingSection/Mailing';
import Courses from './pages/courses/Courses'


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
      <Courses />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
