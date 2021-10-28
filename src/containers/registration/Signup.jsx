import React, { useState } from "react";
const Signup = () =>{
    const[userRegistration, setUserRegistration] = useState({
       firstName:"",
       lastName:"",
       userName:"",
       email:"",
       password:"",
       confirmPassword:"",
    });


    const handleInput = (e) =>{
       


    }
    return(
        <>
        <from>
            <div>
                <label htmlFor="firstname">firstName</label>
                <input type="text" autoComplete="off" name="firstname" id="firstname"
                 value={userRegistration.firstName} onChange={handleInput}/>
            </div>
            
            <div>
               <label htmlFor="lastname">lastName</label>
               <input type="text" autoComplete="off" name="lastname" id="lastname" 
               value={userRegistration.lastName} onChange={handleInput}/>
            </div>

            <div>
               <label htmlFor="username">userName</label>
               <input type="text"  autoComplete="off"  name="username" id="username"
                value={userRegistration.userName} onChange={handleInput}/>
            </div>

            <div>
               <label htmlFor="email">email</label>
               <input type="text" autoComplete="off" name="email" id="email" 
               value={userRegistration.email} onChange={handleInput}/>
            </div>

            <div>
               <label htmlFor="password">password</label>
               <input type="text" autoComplete="off" name="password" id="password" 
               value={userRegistration.password} onChange={handleInput}/>
            </div>

            <div>
               <label htmlFor="confirmpassword">confirmPassword</label>
               <input type="text" autoComplete="off" name="password" id="password" 
               value={userRegistration.confirmPassword}onChange={handleInput}/>
            </div>

            <button type="button">Registration</button>



        </from>
        </>

    )
}
export default Signup
