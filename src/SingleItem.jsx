import React from 'react'
import { useGlobalContext } from './context'

const SingleItem = ({id,input,completed}) => {
    const {remove,toggleCompleted,} = useGlobalContext()
  return (
    <article className="single-item">
    <input type="checkbox" onChange={()=>toggleCompleted(id)}/>
        <p style={{textDecoration:`${completed? 'line-through':''}`}}>{input}</p>
        <button className="btn remove-btn" onClick={()=>remove(id)}>delete</button>
    </article>
  )
}

export default SingleItem