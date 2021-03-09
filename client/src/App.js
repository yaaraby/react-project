import './App.css';
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Menu from "./components/Menu"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Menu/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
