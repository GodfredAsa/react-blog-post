const BlogList = ({blogs, title}) => {

    return ( 
        <div className = "blog-list">
            <h2>{title}</h2>
                    <div className="home">
                        {blogs.map( blog=> 
                        (
                            <div className="blog-preview" key={blog.id}>
                                <h2>{blog.title}</h2>
                                <p>Written By {blog.author}</p>
                                {/* <button onClick={()=> handleDelete(blog.id) }>Delete Blog</button> */}
                            </div>
                        ))}
                    </div> 
        </div>
     );
}
 
export default BlogList;