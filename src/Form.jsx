import React from 'react'
import { useGlobalContext } from './context'

const Form = () => {
    const {handleSubmit,refInput} = useGlobalContext()
    return (
    <form onSubmit={handleSubmit}>
  <h4>Create a todo</h4>

    <div className="form-control">
        <input type="text" id='form-input' name='input' ref={refInput}/>
    <button className="btn">add</button>
    </div>
    </form>
  )
  
}

export default Form