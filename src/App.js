import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Admin from './Pages/Admin/Admin';
import ProtectedRoute from './Components/ProtectedRouting/ProtectedRoute'
import InputHooks from '../src/Components/InputHooks/InputHooks'
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/LoginHooks" component={InputHooks}/>
        <ProtectedRoute exact path="/admin" component={Admin}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
