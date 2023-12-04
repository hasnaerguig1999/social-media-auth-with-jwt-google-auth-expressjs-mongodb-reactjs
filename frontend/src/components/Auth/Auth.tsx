
import React from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const AuthComponent: React.FC = () => {
  return (
    <div>
      <h2>Auth Component</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthComponent;
