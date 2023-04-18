import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./modal.css"
import Register from "../components/register";
import React, { useState } from "react";
import Signin from "../components/signin"
let naam="";
let signedIn=false;
function Navplay(props) {
  const [signUp, setsignUp] = useState(false);
  const [signIn, setsignIn] = useState(false);
  const toggleSignUp = () => {
    setsignUp(!signUp);
    
  };
  const toggleSignIn =()=>{
     setsignIn(!signIn)
  }
  const existing=()=>{
    toggleSignUp()
    toggleSignIn()
  }
  const relay=()=>{
    toggleSignIn()
    toggleSignUp()
  }
  // function Callback(passed){
  // naam = passed;
  // signedIn=true;
  
  
  // }
 

  return (
    <>
     
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand >PlayAlong.TM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={toggleSignUp}>Sign Up</Nav.Link>
            <Nav.Link onClick={toggleSignIn}>Sign In</Nav.Link>
            <Nav.Link href="#pricing">Games</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    {signedIn &&(
      <>
      <h1>Welcome back,{naam}</h1>
      </>
    )}
      {signUp && (
        <div >
        <div onClick={toggleSignUp} className="overlay"></div>
        <div className="modal-content">
         <Register existing={existing} signuptoggle={toggleSignUp}></Register>
          <button className="close-modal" onClick={toggleSignUp} >
            CLOSE
          </button>
        </div>
      </div>
      )}
      
      {signIn && (
        <div >
        <div onClick={toggleSignIn} className="overlay"></div>
        <div className="modal-content">
         <Signin relay={relay} ></Signin>
          <button className="close-modal" onClick={toggleSignIn} >
            CLOSE
          </button>
        </div>
      </div>
      )}

    </>
  );
}

export default Navplay;