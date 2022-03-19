import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory()
    
    const handleSubmit  = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setIsPending(false)
            setBody('')
            setTitle('')
            history.push('/') // redirect to home page after submission
        })
        console.log(blog)
    }
return (
        <div className="create">
            <h2>Add A New Blog</h2>
            
            <form onSubmit={handleSubmit}>
                <label >Blog title: </label>
                <input 
                        type="text" 
                        value={title} 
                        required 
                        onChange={(e)=> setTitle(e.target.value)}
                />
                <label >Blog body: </label>
                <textarea 
                        value={body} 
                        required
                        onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label >Author </label>
               <select value= {author} onChange = {(e)=>setAuthor(e.target.value)}>
                   <option value="Mario">Mario</option>
                   <option value="Goshi">Yoshi</option>
                   <option value="Godfred">Godfred</option>
               </select>

               {!isPending && <button>Add Blog</button>}
               {isPending && <button disabled >Adding Blog ...</button>}
            </form>
        </div>
    );
}
 
export default Create; 