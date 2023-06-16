// ChildComponent.js

import React from 'react';

const ChildComponent = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Child Component</h2>
      {props.children}
    </div>
  );
}

export default ChildComponent;
