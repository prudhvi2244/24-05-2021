import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Book from './components/Book'
function App() {
  return (
    <div className="container">
     <Router>
     <h2 className="text-primary">Book Management System</h2>
         <Link to='/book'>Book</Link>
       <Switch>      
         <Route path='/book' component={Book}/>
       </Switch>
     </Router>
    
    </div>
  );
}

export default App;
