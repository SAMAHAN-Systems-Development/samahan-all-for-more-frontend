// precommittesating.tsx

import React from 'react';

const precommittesating = () => {
  const message = 'Hello World'; // improper spacing, missing semicolon, unnecessary double quotes

  const handleClick = () => {
    alert(message); // missing semicolon
  };

  return (
    <div>
      <h1>{message}</h1> {/* Extra spaces around curly braces */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default precommittesating;
