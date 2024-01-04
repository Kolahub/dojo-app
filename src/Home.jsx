import React from 'react'
import BlogLists from './BlogLists'
import useFetch from './useFetch'

function Home() {
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
  /*
  ///FUNCTION AS PROPS
  const handleDelete = (id) => {
   const newBlogs = blogs.filter((blog) => blog.id !== id)
   console.log(newBlogs)
    setBlogs(newBlogs)
  }
  */
  return (
    <div className="Home">
      {error && <div> { error } </div>}
      { isPending && <div>Loading...</div> }
    {blogs && <BlogLists blogs={blogs} title = 'All Blogs' /*handleDelete = {handleDelete} */ />}
    </div>
  )
}
export default Home