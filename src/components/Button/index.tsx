import React from 'react'

interface ButtonProps {
  onClick: () => void;
  text: string;
  type: 'button' | 'reset' | 'submit';

}

const Button: React.FC<ButtonProps> = ({ onClick, text, type }) => {
  return (
    <button style={{
      backgroundColor: '#1199fa',
      borderRadius: '50px',
      height: '28px',
      width: '80px',
      border: '0',
      color: 'white'
    }}
      type='button'>
      {text}
    </button>
  )
}

export default Button;
