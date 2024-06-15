import React from 'react'
import Parent from '../children/Parent';
import Child from '../children/Child';

interface Props {}

const ChildrenPropExample= () => {
  return (<div>
    <Parent>
        <Child />
    </Parent>
  </div>);
};

export default ChildrenPropExample