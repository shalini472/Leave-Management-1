
import React, { Component } from 'react';
import {EmailRegex} from '../../Constants/Constants';
const Validator=(SubmitedValues)=>{
    const error={};
    if(!SubmitedValues["email"]){
        error["email"]="email is Required"
    }
    if(!SubmitedValues["password"]){
        error["password"]="password is required"
    }
    if(SubmitedValues["email"] && !(SubmitedValues["email"].match(EmailRegex))){
        error["email"]="Email format is incorrect"
    }
    if(SubmitedValues["password"] && (SubmitedValues["password"].length<8)){
        error["password"]="password length is too small"
    }
   return error; 
}
export default Validator;