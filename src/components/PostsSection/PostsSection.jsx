import './PostsSection.css';
import { useState } from 'react';
import { useAuth } from '../../context/Auth/UserProvider';

export default function PostsSection({allPosts}){
    const { cookies } = useAuth();
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState(allPosts);//[]);

    console.log(posts)

    // useEffect(() => {
    //         const getPosts = async () => {
    //             try{
    //                 const response = await fetch(`http://localhost:3000/api/user/profile/post`);
    //                 const data = await response.json();
    //                 setPosts(data);
    //             }catch(err){
    //                 console.log(err.message);
    //             }
    //             getPosts();
    //         }
    //     }, [])

    const handleAdd = async () => {
        if(post.trim() !== ""){
            try{
                const response = await fetch(`http://localhost:3000/api/user/profile/post`, {
                    method: 'PATCH',
                    headers: {
                        'x-auth-token': cookies.token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({posts: post})
                });

                const data = await response.json();
                console.log(data);
                setPosts((prevPosts) => [...prevPosts, data]);
                setPost("");
            }catch(err){
                console.log(err.message);
            }
        }
    }

    const handleDelete = async(postId) => {
        console.log(postId);
        try{
            console.log('before fetch');
            const response = await fetch(`http://localhost:3000/api/user/profile/post/${postId}`, {
                method: 'DELETE',
                headers: {
                    'x-auth-token': cookies.token,
                    'Content-Type': 'application/json'
                }
            });
            console.log('after fetch');

            if (response.ok) {
                setPosts(posts.filter(p => p.post_id !== postId));
            }
        }catch(err){
            console.log(err.message);
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
                        <div key={i}  className='eachPost'>
                            <p>{post.post}</p>
                            <button className='dltBtn' onClick={() => handleDelete(post.post_id)}>X</button>
                        </div>
                    ))
                ):(
                    <p>Add your posts here</p>
                )}
            </div>
        </div>
    );
}