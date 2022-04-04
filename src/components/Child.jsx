import React from 'react'
const Child = (props) => {
  return (
    <div>
        <button
        onClick={() => props.changeParentData('Hello From Child')}
        >
            ChangeParentData
        </button>
    </div>
  )
}
export default Child;
