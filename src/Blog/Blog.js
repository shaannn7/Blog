import React from 'react'
import { useContext  } from 'react'
import { myContext } from '../App'
import { useParams } from 'react-router-dom'
const Blog = () => {
    const data = useContext(myContext)
    const {id} = useParams()
    const blog = data.filter((value,index)=>(
        index===parseInt(id)
    ))
  return (
     <>
      {blog.map((x)=>(
        <div>
            <h1>{x.title}</h1>
            <h3>{x.body}</h3>
        </div>
      ))}
     </>
  )
}

export default Blog