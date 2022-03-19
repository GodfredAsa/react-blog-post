import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    return (
      <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading ...</div>}
          {blogs && <BlogList blogs ={blogs} title = "All Blogs"/>}
          {/* this views only mario's blog based on the filtered value */}
          { blogs && <BlogList blogs ={blogs.filter((blog)=> blog.author ==="Mario")} title = "Mario's Blogs"/>}
      </div>
      );
}
 
export default Home; 