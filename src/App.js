import './App.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/courses">
            <Courses></Courses>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
