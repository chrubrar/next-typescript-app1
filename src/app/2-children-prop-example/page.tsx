import React from 'react'
import Parent from '../components/children/Parent';
import Child from '../components/children/Child';

const ChildrenPropExample= () => {
  return (<div className='flex min-h-screen'>
    <Parent>
        <Child />
    </Parent>
  </div>);
};

export default ChildrenPropExample