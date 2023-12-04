import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBarComponent: React.FC = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsSigningIn((prevIsSigningIn) => !prevIsSigningIn);
    if (isSigningIn) {
      console.log('User signing in');
      navigate('/signin');
    } else {
      console.log('User signing up');
      navigate('/signup');
    }
  };

  return (
    <>
      <button
        className={`bg-[#0D47A1] hover:bg-[#0D47A1] text-white font-small py-2 rounded focus:outline-none focus:shadow-outline`}
        id="btn"
        onClick={handleClick}
      >
        {isSigningIn ? 'SIGN IN' : 'SIGN UP'}
      </button>
    </>
  );
};

export default NavBarComponent;
