import React, { Component } from 'react';
import InputClass from '../../Components/Input/InputHooks';
import {Grid,Button,Card, CardHeader,CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './LoginForm.css';
import Validator from '../Utils/Validator';
const styles = {
    root: {
        width:'83%',
    },
    button:{
        backgroundColor:"black",
        color:"white",
    }
  };
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            onSubmitValues:{},
            isLoggedIn:false,
            errorMessage:{},
            responseMessage:"",
        }
    }
    handleChange=(text,value)=>{
        const onSubmitValues=this.state.onSubmitValues;
       onSubmitValues[text]=value;
       var errorMessage=this.state.errorMessage;
       errorMessage[text]="";
       this.setState({
           onSubmitValues,
           errorMessage,
           responseMessage:""
       })
    }
    validation=(SubmitedValues)=>{
        var errorMessage=this.state.errorMessage;
        var validate=true;
        var pattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(typeof SubmitedValues["email"] === "undefined"){
             console.log("yes")
             errorMessage["email"]="Email is Empty";
             validate=false;
        }
        if(typeof SubmitedValues["password"] === "undefined"){
            errorMessage["password"]="Password is Empty";
            validate=false;
        }
        if(typeof SubmitedValues["email"] !=="undefined"){
        if(!SubmitedValues["email"].match(pattern)){
            errorMessage["email"]="Email format is incorrect"
            validate=false;
        }
        if(typeof SubmitedValues["password"] !=="undefined"){
            if((SubmitedValues["password"]).length < 8){
                errorMessage["password"]="PasswordLength is too small"
                validate=false;
         }
        }

    }
        this.setState({
            errorMessage
        })
        return validate;
    }
   
     submit=async(event)=>{
         event.preventDefault();
         let onSubmitValues=this.state.onSubmitValues;
         var validate=Validator(onSubmitValues)
        this.setState({
            errorMessage:validate
        })
       
         if((Object.keys(validate)).length===0){
         const response=await fetch("http://localhost:5000/lms/loginAdmin",{
             method:"POST",
             headers: {
                'Content-Type': 'application/json'
              },
             body:JSON.stringify(this.state.onSubmitValues)
         }).then(response=>response.json()).then(data=>{
            if(data.success===true){
                localStorage.setItem("token",data.token);
                this.setState({
                    isLoggedIn:true,
                    errorPasswordMessage:"",
                    errorEmailMessage:"",
                })
                this.props.history.push("/admin",{state:this.state.isLoggedIn});
            }
            else{
                this.setState({
                    responseMessage:data.message
                })
            }
         })
        }}
       
    render() { 
        const {classes}=this.props;
        const {responseMessage,errorMessage}=this.state;
        return (<Card container alignItems="center" justify="center">
            <CardContent  className={classes.root}>
            <h1>ADMIN LOGIN</h1>
            <formControl>
                <InputClass type="text" name="email" text="email" errorMessage={errorMessage["email"]} onChange={this.handleChange}/>
                <InputClass type="password" name="password" text="password" errorMessage={errorMessage["password"]} onChange={this.handleChange}/>
                <Button className={classes.button} onClick={this.submit}>LOGIN</Button>
            </formControl>
            <div>{responseMessage}</div>
            </CardContent>
        </Card>  );
    }
}
 
export default  withStyles(styles)(LoginForm);