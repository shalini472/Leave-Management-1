import React, {useState} from 'react';

const InputHooks=()=> {
    const [state,setState]=useState({name:"",passowrd:""});
    // const [name,setName]=useState("");
    // const [password,setPassword]=useState("");
    const handleChange=(event)=>{
     setState({...state,
        [event.target.name]:event.target.value})   
    }
    const submit=(event)=>{
        event.preventDefault();
       console.log(name,password);
    }
    const {name,password}=state;
    return (
        <div>
         <form onSubmit={submit}>
           <input type="text" name="name" onChange={handleChange} placeholder="...." value={name} />
           <input type="password" name="password" onChange={handleChange} placeholder="...." value={password} />
           <button type="submit">submit</button>
        </form>
        </div>

    )
}

export default InputHooks;