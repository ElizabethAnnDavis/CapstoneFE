import './PostsSection.css';
import { useState } from 'react';
import { useAuth } from '../../context/Auth/UserProvider';

export default function PostsSection({allPosts}){
    const { cookies } = useAuth();
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState(allPosts);

    const handleAdd = async () => {
        if(post.trim() !== ""){
            console.log('before try');
            try{
                console.log('before fetch');
                const response = await fetch(`http://localhost:3000/api/user/profile/post`, {
                    method: 'PATCH',
                    headers: {
                        'x-auth-token': cookies.token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({posts: post})
                });
                console.log('after fetch');

                const data = await response.json();
                console.log(data);
                setPosts((prevPosts) => [...prevPosts, post]);
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