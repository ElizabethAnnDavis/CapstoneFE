import './PostsSection.css';
import { useState } from 'react';
import { useAuth } from '../../context/Auth/UserProvider';

export default function PostsSection(allPosts){
    const { cookies } = useAuth();
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState(allPosts);

    const handleAdd = async () => {
        if(post.trim() !== ""){
            try{
                const response = await fetch(`http://localhost:3000/api/user/profile/posts`, {
                    method: 'PATCH',
                    headers: {
                        'x-auth-token': cookies.token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({posts: post})
                });

                const data = await response.json();
                console.log(data);
                setPosts([...posts, post]);
                setPost("");
            }catch(err){
                console.log(err.message);
            }
        }
    }

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