import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
const ProtectedRoute=({component:Comp,path,...rest})=>{
 return(
     <Route 
     path={path}
     {...rest}
     render={(prop)=>{
        return localStorage.getItem("token")?<Comp {...prop}/>:<Redirect to="/"/>
     }}
     /> 
 )
}
export default ProtectedRoute;