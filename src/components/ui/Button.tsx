import React from 'react';


interface ButtonProps {
  text: string; 
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {text}
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    borderRadius: '50px',
    border: '2px solid #0000FF',
    backgroundColor: 'transparent',
    color: '#0000FF',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default Button;
