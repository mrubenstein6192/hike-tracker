import React from 'react';
import { Button } from 'react-bootstrap';

function LoginButton() {
  return (
    <Button
      className='login-button bg-danger'
      as="a"
      href="http://localhost:3001/auth/google"
    >
      Login with Google
    </Button>    
  )
}

export default LoginButton;