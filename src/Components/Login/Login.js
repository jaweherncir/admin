import React from 'react'
import './css/LoginCss.css';

import { useState } from 'react';
import axios from 'axios';
export default function Login() {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  
  const handleLogin=(e)=>{
    e.preventDefault();
  
      axios({
        method:"POST",
        url:`${process.env.REACT_APP_API_URL}api/admin/login`,
        header:{
          'Access-Control-Allow-Origin': '*'

        },
        withCredentials:true,
     
        data:{
          email,password
        },
      })
      .then((res)=>{
        window.location='/Dashboard';
   console.log(res.data.response)
       
      })
      .catch((error)=>{
        if (error.response) {
          console.log(error.response.data); // Error response data from the server
         alert(error.response.data)
        } else {
          console.log(error); // Request error
          // Handle request error
        }
      })
  };
  return (
    <div>
    <form action='' id="sing-up-form">
      <div className="main">
  <div className="sub-main">
    <div>
      <div className="imgs">
        <div className="container-image">
        <img src="assets/imageLogin/Avataradmin.png" alt="profile" className="profile"/> 
        </div>
      </div>
      <div>
        <h1>SuperAdmin</h1>
        <div>
       
          <input
          type="email" 
          placeholder="Votre email" 
          className="name"
          name="email" 
          id="email" 
          onChange={(e)=>setEmail(e.target.value)} 
          value={email}
           />
        </div><br/>
      <center> <div className="email error"></div></center> <br/>
        <div className="second-input">
       
          <input type="password"
           placeholder="Votre Mot De Passe"
            className="name"
            name="password" 
            id="password" 
            onChange={(e)=>setPassword(e.target.value)} 
            value={password} 
                    
            />
        </div>
        <div className='password error'></div><br/>
       <div className="login-button">
      <button onClick={handleLogin} >
        
           Login</button>

          
       </div>
       <a href="loginAdmin" className="text-secondary font-weight-bold text-xs"
                         
                         data-toggle="tooltip" data-original-title="Edit user">
                             Vous Ete Admin !!!Cliquez Ici
                         </a>
       
        

      </div>
    </div>
    

  </div>
 </div>
 </form>
  </div>
  )
}
