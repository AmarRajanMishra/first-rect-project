import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
        <h1>Welcome To Parent Component</h1>
        <Child name={'Ajay'} />
    </div>
  )
}

export default Parent