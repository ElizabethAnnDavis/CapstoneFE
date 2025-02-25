import './PostsSection.css';
import { useState } from 'react';

export default function PostsSection(allPosts){
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);

    const handleAdd = () => {
        if(post.trim() !== ""){
            setPosts([...posts, post]);
            setPost("");
        }
    };

    return(
        <div className='postSection'>
            <h1>Posts</h1>
            <input type='text' value={post} onChange={(e) => setPost(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
            <div>
                {posts.length > 0 ? (
                    posts.map((post, i) => (
                        <div key={i}><p>{post}</p></div>
                    ))
                ):(
                    <p>Add your posts here</p>
                )}
            </div>
        </div>
    );
}