import React, { Component } from 'react';
import {styles} from './Login.module.css';
import LoginForm from '../../Components/LoginForm/LoginForm'
class Login extends Component {
    state = {  }
    render() { 
        return(<div>
            <LoginForm history={this.props.history}/>
        </div>  );
    }
}
 
export default Login;