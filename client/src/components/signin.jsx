import React, { useState } from "react";

import { Navigate } from 'react-router'



export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  

  const {relay} = props;
  

  function handleSubmit(e) {
    e.preventDefault();

    
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
     
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.status === "ok") {
        setStatus(true);
        
        }
      });
      
  }
  const relayRegister=()=>{
    relay()
  }

  if(status){
    
    return <Navigate to='/welcome'/>;
    // return(<Home signIn="yes" username={username}></Home>)
      
}
  return (
    <>
    
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="Name"
              className="form-control"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit"  className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a role="button" onClick={relayRegister}>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}