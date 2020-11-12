import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core'
import { AppBar, Toolbar } from '@material-ui/core'
import {BrowserRouter as Routing, Route, Switch} from 'react-router-dom'
import login from './components/pages/login/login';
import registration from './components/pages/registration/registration';
import forget_password from './components/pages/forget-password/forget_password';
import reset_password from './components/pages/reset-password/reset_password';

function App() {
  return (
    <Routing>
     <div className="App">
        <Switch>
          <Route path="/" exact component={login}/>   
          <Route path="/registration" component={registration}/>
          <Route path="/forgetPassword" component={forget_password}/>
          <Route path="/resetPassword" component={reset_password}/>
        </Switch>
     </div>
    </Routing>
  );
}

export default App;

