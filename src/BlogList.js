import React  from 'react';
import { Link } from 'react-router-dom';
const BlogList = ({blogs, title}) => {

    if(blogs.title === null){
        return  <h2>No Post Available </h2>;
    }
    return ( 
        <div className = "blog-list">
            <h2>{title}</h2>
                    <div className="home">
                        {blogs.map( blog=> 
                        (
                            <div className="blog-preview" key={blog.id}>
                               <Link to={`/blogs/${blog.id}`}>
                                    <h2>{blog.title}</h2>
                                    <p>Written By {blog.author}</p>
                               </Link>
                                {/* <button onClick={()=> handleDelete(blog.id) }>Delete Blog</button> */}
                            </div>
                        ))}
                    </div> 
        </div>
     );

}
 
export default BlogList;