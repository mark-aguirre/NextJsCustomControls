import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({ type = 'button', variant = 'primary', onClick, children }: ButtonProps) {
  return (
    <button 
      type={type} 
      className={`btn btn-${variant}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}