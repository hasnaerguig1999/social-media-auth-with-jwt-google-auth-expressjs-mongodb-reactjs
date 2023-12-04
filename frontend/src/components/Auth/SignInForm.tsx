import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField,FormControl, InputLabel, InputAdornment, IconButton } from "@mui/material";
import { SlLock } from "react-icons/sl";
import { FcGoogle } from 'react-icons/fc';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../redux/store/Actions/AuthAction';

interface SignInFormProps {}

const SignInForm: React.FC<SignInFormProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleSignIn = () => {
    dispatch<any>(loginAsync(email, password));
  };

  return (
    <div className="shadow-[#ccc] shadow-[0px_1px_4px] w-80 mx-auto py-4 px-6 text-center">
      <button className='btn bg-rose-600' id="btn-style">
        <SlLock id="icon-style" />
      </button>
      <h3 className="text-2xl font-semibold mb-4">Sign In</h3>
      <form className="flex flex-col gap-3 w-full">
        <TextField
          id="email"
          label="Email Address*"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl sx={{ m: 0, width: '31.5ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password3">Password*</InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password3"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" onClick={handleSignIn} id="btn-sign-in">
          Sign In
        </Button>
        <button className="flex items-center" id="btn-style-googles">
          <FcGoogle className="mr-2" id="icone-style-google" />
          Se Connecter avec Google
        </button>
        <button className="flex items-center" id="btn-signup">
          DON'T HAVE AN ACCOUNT? SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
