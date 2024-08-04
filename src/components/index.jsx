import React from 'react';
import Button from './Button';
import { number } from '../utils/PropTypes';

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

Component.propTypes = {
  count: number.isRequired,
};

export default Component;
