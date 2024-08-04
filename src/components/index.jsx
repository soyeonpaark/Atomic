import React from 'react';
import Button from './Button';

const Component = () => {
  const handleClick = () => {
    globalThis.update();
  };

  return (
    <div>
      <Button onClick={handleClick}>Button</Button>
    </div>
  );
};

export default Component;
