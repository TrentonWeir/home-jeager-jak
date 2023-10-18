
import React from 'react';

export const TextTypes = {
  P: 'p',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
};

const Text = (props) => {
  const { type, children } = props;
  const ElementType = TextTypes[type] || 'p'; // Default to 'div' if type is not recognized.

  return (
    <ElementType className="custom-element">
      {children}
    </ElementType>
  );
};

export default Text;

