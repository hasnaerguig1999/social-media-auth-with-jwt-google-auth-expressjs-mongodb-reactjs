import { TbClover } from "react-icons/tb";
import React, { useEffect } from 'react';

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  useEffect(() => {
  }, [isLoading]);

  if (!isLoading) {
    return null; 
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center bg-primary-content'>
      <TbClover className="w-28 h-28 text-primary animate-spin"/>
      <span className='text-5xl font-bold text-primary'>Chargement . . .</span>
    </div>
  );
}

export default LoadingSpinner;
