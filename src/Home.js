import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
// updates the data in the blog 
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError]  = useState(null)
    
// 1.  getting the data 
    useEffect(()=>{

        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
                .then( res => {
                    if(!res.ok){
                        throw Error("Could not fetch the data for the resource");
                    }
                    return res.json()
                }).then(data => {
                    // 2 sets the data 
                    setBlogs(data); 
                    setIsPending(false)
                    setError(null)
                }).catch( err => {
                    setError(err.message)
                    setIsPending(false)
                    console.log(err.message)
                })
        }, 1000)
   
    },[]);


    // page Loader when data not gotten  
    

// if blog is true then return blogList component else nothing 
    return (
      <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading ...</div>}
          {blogs && <BlogList blogs ={blogs} title = "All Blogs"/>}

          {/* this views only mario's blog based on the filtered value */}
          {/* { blogs && <BlogList blogs ={blogs.filter((blog)=> blog.author ==="Mario")} title = "Mario's Blogs"/>} */}

      </div>
      
      );
}
 
export default Home; 