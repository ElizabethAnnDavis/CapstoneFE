//import './CommentsSection.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth/UserProvider';
import { useParams } from 'react-router-dom';


export default function CommentsSection(){
    const [comment, setComment] = useState("");
    const [thisComment, setThisComment] = useState("");
    const { cookies } = useAuth();
    const { favId } = useParams();


    useEffect(() => {
        const getComment = async () => {
            try{
                const response = await fetch(`https://melikey.onrender.com/api/user/profile/fav/${favId}`);
                const data = await response.json();
                setThisComment(data || "");
            }catch(err){
                console.log(err.message);
            }
            getComment();
        }
    }, [favId])

    const handleAdd = async () => {
        console.log('favId: ', favId)
        if(comment.trim() !== ""){
            try{
                const response = await fetch(`https://melikey.onrender.com/api/user/profile/fav/${favId}`, {
                    method: 'PATCH',
                    headers: {
                        'x-auth-token': cookies.token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({comments: comment})
                });

                const data = await response.json();
                console.log(data);
                setThisComment(data);
                setComment("");
            }catch(err){
                console.log(err.message);
            }
        }
    }

    const handleDelete = async () => {
        try{
            const response = await fetch(`https://melikey.onrender.com/api/user/profile/fav/${favId}`, {
                method: 'PATCH',
                headers: {
                    'x-auth-token': cookies.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({comments: ""})
            });

            const data = await response.json();
            setThisComment("");
            setComment("");
        }catch(err){
            console.log(err.message);
        }
    }

    return(
        <div>
            <h1>Comments</h1>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
            <div>
                {thisComment ? (
                    <div >
                        <p>{thisComment}</p>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                ):(
                    <p>Add your comment here</p>
                )}
            </div>
        </div>
    );
}