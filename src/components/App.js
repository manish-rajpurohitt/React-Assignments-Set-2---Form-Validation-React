import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const st = {
    name:"",
    email:"",
    password:"",
    gender:"male",
    phone:""
  }
  const [formState,setFormState] = React.useState(st);
  const [validatedState,setvalidatedState] = React.useState(false);
  const [message,setMessage] = React.useState("");

  const handleSubmit= (event)=>{
    event.preventDefault();
    console.log(formState);
    if(formState.name === "" || formState.email === "" ||
        formState.password === "" || formState.phone === "" || formState.gender === ""){
      setMessage("All fields are mandatory");
      return;
    }else if(!formState.name.match(/^[a-zA-Z0-9_ ]*$/)){
      setMessage("Name is not alphanumeric");
    }else if(!formState.email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/)){
      setMessage("Email must contain @");
    }else if(formState.gender !== "male" && formState.gender !== "female" && formState.gender !== "others"){
      setMessage("Please identify as male, female or others")
    }else if(!formState.phone.match(/^[0-9]*$/)){
      setMessage("Phone Number must contain only numbers");
    }else if(formState.password.length < 6){
      setMessage("Password must contain atleast 6 letters");
    }else {
      setMessage(`Hello ${formState.email.split('@')[0]}`);
    }
  }
  return (
    <div id="main">
      <form onSubmit={()=>handleSubmit(event)}>
       <label>
          Name:{" "}
          <input  
            type="text" 
            value={formState.name} 
            onChange={(e)=>setFormState({...formState,name:e.target.value})} 
            data-testid = 'name' />
        </label>
        <label>
          Email:
          <input  
            type="text" 
            value={formState.email} 
            onChange={(e)=>setFormState({...formState,email:e.target.value})}
            data-testid = 'email' />
        </label>
        <label data-testid = 'gender'>
          Gender:
          <input 
            data-testid = 'gender'
            type="text" 
            value={formState.gender}
            onChange={(e)=>setFormState({...formState,gender:e.target.value})} />
        </label>
        <label>
          Phone Number:
          <input 
            data-testid = 'phoneNumber'
            type="text" 
            value={formState.phone} 
            onChange={(e)=>setFormState({...formState,phone:e.target.value})} />
        </label>
        <label>
          Password:
          <input 
            data-testid = 'password'
            type='password'
            value={formState.password} 
            onChange={(e)=>setFormState({...formState,password:e.target.value})} />
        </label>
        <input 
          data-testid = 'submit'
          type="submit" 
          value="Submit" />
      </form>
  
  <p>{message}</p>
    </div>
  )
}


export default App;
