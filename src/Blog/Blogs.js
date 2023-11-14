import React, { useContext } from 'react'
import { myContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Blogs = () => {
    const data = useContext(myContext)
    const nav = useNavigate()
    
  return (
    <>
      {data.map((x,index)=>(
        <div>
            <Link to={`/Blog/${index}`}><h2>{x.title}</h2></Link>
        <h3>{x.body}</h3>
        </div>
      ))}
      <Button variant="secondary" onClick={()=>nav("/CreateBlog")}>Create more</Button>

    </>
  )
}

export default Blogs