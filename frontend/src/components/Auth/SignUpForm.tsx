import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField, Box, FormControl, InputLabel, InputAdornment, IconButton } from "@mui/material";
import { SlLock } from "react-icons/sl";
import { FcGoogle } from 'react-icons/fc';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../../redux/store/Actions/AuthAction';

interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword,setRepeatPassword]= useState('')

  const dispatch = useDispatch();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSignUp = () => {
    const name = `${firstName} ${lastName}`;
    if (password === repeatPassword) {
      dispatch<any>(registerAsync({name, email, password}));
    } else {
      console.error("Passwords do not match");
    }
  };
  
  
  return (
    <>
      <div className="shadow-[#ccc] shadow-[0px_1px_4px] w-80 mx-auto py-4 px-6 text-center">
        <button className='btn bg-rose-600' id="btn-style">
          <SlLock id="icon-style"/>
        </button>
        <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
       >
            <div className="flex gap-3">
              <TextField
                id="outlined-multiline-flexible"
                label="First Name*"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                multiline
              />
              <TextField
              name="lastName"
               onChange={(e) => setLastName(e.target.value)}
                id="name"
                label="Last Name*"
                multiline
              />
              
            </div>
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address *"
                type="email"
                name="email"
                id="email"
                
            />
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password3" >Password*</InputLabel>
                 <OutlinedInput name="password"
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



              <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password2" >Repeat Password*</InputLabel>
                 <OutlinedInput name="repeatPassword"
                   id="outlined-adornment-password2"
                   type={showPassword ? 'text' : 'password'}
                   onChange={(e) => setRepeatPassword(e.target.value)}
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


            <Button variant="contained"  id="btn-signuup" onClick={handleSignUp}>
              Sign Up
            </Button>
            <button className="flex items-center" id="btn-style-google">
              <FcGoogle className="mr-2" id="icone-style-google" />Se Connecter avec Google
            </button>
            <button className="flex items-center" id="btn-signupe">ALREADY HAVE AN ACCOUNT? SIGN IN</button>
         
        </Box>
      </div>
    </>
  );
};

export default SignUpForm;