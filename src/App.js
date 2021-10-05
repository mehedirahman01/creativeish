import './App.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>

        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          {/* Courses Page */}
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>

          {/* About Page */}
          <Route exact path="/about">
            <About></About>
          </Route>

          {/* Contact Page */}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          {/* Error Page */}
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
