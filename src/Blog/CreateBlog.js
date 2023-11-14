import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const CreateBlog = ({handleChange}) => {
    const [title , setTitle] = useState("")
    const [body , setBody]=useState("")
    return ( 
        <>
            <h2>TiTLE : </h2>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} /><br />
            <h2>BODY : </h2>
            <textarea cols="40" rows="5" onChange={(e)=>setBody(e.target.value)}></textarea><br />
            <Button variant="secondary" onClick={()=>handleChange(title,body)}>Post</Button>
        </>
    )
}

export default CreateBlog