import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Admin extends Component {
    state = {  }

    handleLogout=()=>{
        localStorage.clear();
        return this.props.history.push("/");
        
    }

    render() { 
        return(<div>Admin page
            <button onClick={this.handleLogout}>Logout</button>
            </div>)};
}

 
export default Admin;