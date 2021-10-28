import React, { useState } from "react";
import './style.css'
const Signup = () =>{
    const[userRegistration, setUserRegistration] = useState({
       FirstName:"",
       LastName:"",
       Username:"",
       Email:"",
       Password:"",
       ConfirmPassword:"",
    });


    const handleInput = (e) =>{
      


    }
    return(
        <>
        <form className="for">
           <h1>Sign Up</h1>
           
            <div className="field">
                <label htmlFor="firstname">First Name</label><br/>
                <input type="text" autoComplete="off" name="firstname" id="firstname"
                 value={userRegistration.FirstName} onChange={handleInput}/>
            </div>
          
            <div className="field">
               <label htmlFor="lastname">Last Name</label><br/>
               <input type="text" autoComplete="off" name="lastname" id="lastname" 
               value={userRegistration.LastName} onChange={handleInput}/>
            </div>
            
            <div className="field">
              <label htmlFor="username">Username</label><br/>
               <input type="text"  autoComplete="off"  name="username" id="username"
                value={userRegistration.Username} onChange={handleInput}/>
            </div>

            <div className="field">
               <label htmlFor="email">Email</label><br/>
               <input type="text" autoComplete="off" name="email" id="email" 
               value={userRegistration.Email} onChange={handleInput}/>
            </div>

            <div className="field password">
               <label htmlFor="password">Password</label><br/>
               <input type="text" autoComplete="off" name="password" id="password" 
               value={userRegistration.Password} onChange={handleInput}/>
            </div>

            <div className="field">
               <label htmlFor="confirmpassword">Confirm Password</label><br/>
               <input type="text" autoComplete="off" name="password" id="password" 
               value={userRegistration.ConfirmPassword}onChange={handleInput}/><br/><br/>
            </div>

            <button type="button">Register</button>
           



        </form>
        </>

    )
}
export default Signup
