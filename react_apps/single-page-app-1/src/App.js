import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './components/Home';
import Services from './components/Services';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import Employees from './components/Employees';

function App() {
  return (
    <Router>
       <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link "   to="">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/employees">Employees</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" to="/signin">Signin</Link></li>
              <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className='container mt-1'>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/employees" component={Employees} />
   
    
   
  </Switch>
  </div>
  </Router>
  
  );
 
}

export default App;
