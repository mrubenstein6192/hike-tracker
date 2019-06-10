import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/css/style.css';

function LoginButton() {
  return (
    <Button
      className='login-button'
      as="a"
      href="http://localhost:3001/auth/google"
    >
      Login with <i className="fab fa-google-plus-g"></i>
    </Button>    
  )
}

export default LoginButton;