import React from 'react';
import { Button } from 'react-bootstrap';

let loginPath = (process.env.NODE_ENV === "production" ? "https://my-hikes.herokuapp.com/auth/google" : "http://localhost:3001/auth/google");

function LoginButton() {
  return (
    <Button
      className='login-button bg-danger'
      as="a"
      href={loginPath}
    >
      Login with Google
    </Button>    
  )
  
}

export default LoginButton;