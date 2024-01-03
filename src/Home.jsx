import React from 'react'
import BlogLists from './BlogLists'
import { useState, useEffect } from 'react'
function Home() {
  const [blogs, setBlogs] = useState (null)
  const [isPending, setisPending] = useState(true)
  /*
  ///FUNCTION AS PROPS
  const handleDelete = (id) => {
   const newBlogs = blogs.filter((blog) => blog.id !== id)
   console.log(newBlogs)
    setBlogs(newBlogs)
  }
  */

  useEffect(() => {
    fetch("http://localhost:8000/blog").then(res => {
      return res.json();
    }).then(data => {
      setBlogs(data)
      setisPending(false)
    })
  }, [])
  return (
    <div className="Home">
      { isPending && <div>Loading...</div> }
    {blogs && <BlogLists blogs={blogs} title = 'All Blogs' /*handleDelete = {handleDelete} */ />}
    </div>
  )
}
export default Home