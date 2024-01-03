import React from 'react'

function BlogLists({blogs, title, /*handleDelete*/ }) {
  return (
    <div className="blogLists">
      <h2> { title } </h2>
        {blogs.map((blog) => (
        <div className="blog-preview" key = {blog.id}>
          <h2>{blog.title}</h2>
           <p>Wriiten byt { blog.author} </p>
           {/* <button onClick = {() => handleDelete(blog.id)}>Delete blog</button> */}
        </div>
    ))}
    </div>

  )
}

export default BlogLists