import React, { useState,ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

interface InputProps {
  label: string;
  type: string;
  value?: string;
  id : string;
  name: string;  
  onChange?: (value: string) => void;
}

const InputComponent: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };
  
  return <TextField label={label}
  type={type}
  value={inputValue}
  onChange={handleInputChange} />;
};

export default InputComponent;