import React, { useState } from 'react'
import Child from './Child';
const Parent = () => {

    const [data, setData] = useState('Hello From Parent')

    return (
        <div>
            <h1>{data}</h1>
            <Child 
            changeParentData={data => setData(data)}
            />
        </div>
    )
}
export default Parent;
