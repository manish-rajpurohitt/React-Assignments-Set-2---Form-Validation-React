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

  const handleSubmit= (event)=>{
    event.preventDefault();
    console.log(event.target);
    if(formState.length === 0){
      return;
    }
    setvalidatedState(true);
  }
  return (
    <div id="main">
      <form onSubmit={()=>handleSubmit(event)}>
       <label>
          Name:
          <input 
            pattern={`^[a-zA-Z0-9 ]*$`}
            onInvalid={(e)=>{setvalidatedState(false); e.target.setCustomValidity('Name is not alphanumeric')}}
            onInput={(e)=>e.target.setCustomValidity('')} 
            required 
            type="text" 
            value={formState.name} 
            onChange={(e)=>setFormState({...formState,name:e.target.value})} 
            data-testid = 'name' />
        </label>
        <label>
          Email:
          <input 
            onInvalid={(e)=>{setvalidatedState(false); e.target.setCustomValidity('Email must contain @')}}
            onInput={(e)=>e.target.setCustomValidity('')} 
            required 
            type="email" 
            value={formState.email} 
            onChange={(e)=>setFormState({...formState,email:e.target.value})}
            data-testid = 'email' />
        </label>
        <label data-testid = 'gender'>
          Gender:
          <input 
            data-testid = 'gender'
            type="radio" 
            value="male" 
            checked={formState.gender==="male" ? true:false} 
            onChange={(e)=>setFormState({...formState,gender:"male"})} />Male
          <input 
            data-testid = 'gender'
            type="radio" 
            value="female" 
            checked={formState.gender==="female" ? true:false} 
            onChange={(e)=>setFormState({...formState,gender:"female"})} /> Female
          <input 
            data-testid = 'gender'
            type="radio" 
            value="female" 
            checked={formState.gender==="other" ? true:false} 
            onChange={(e)=>setFormState({...formState,gender:"other"})} /> Other
        </label>
        <label>
          Phone Number:
          <input 
            data-testid = 'phoneNumber'
            onInvalid={(e)=>{setvalidatedState(false); e.target.setCustomValidity('Phone Number must contain only numbers')}}
            onInput={(e)=>e.target.setCustomValidity('')} 
            required 
            type="number" 
            value={formState.phone} 
            onChange={(e)=>setFormState({...formState,phone:e.target.value})} />
        </label>
        <label>
          Password:
          <input 
            data-testid = 'password'
            type='password'
            minLength={6}
            onInvalid={(e)=>{setvalidatedState(false); e.target.setCustomValidity('Password must contain atleast 6 letters')}}
            onInput={(e)=>e.target.setCustomValidity('')} 
            required 
            value={formState.password} 
            onChange={(e)=>setFormState({...formState,password:e.target.value})} />
        </label>
        <input 
          data-testid = 'submit'
          type="submit" 
          value="Submit" />
      </form>
  {validatedState?<h1>Hello {formState.email.split('@')[0]}</h1>:""}
    </div>
  )
}


export default App;
