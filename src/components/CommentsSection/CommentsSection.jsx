//import './CommentsSection.css';
import { useState, useEffect } from 'react';

export default function CommentsSection({ userId, favId }){
    const [comment, setComment] = useState("");
    const [thisComment, setThisComment] = useState("");

    useEffect(() => {
        const getComment = async () => {
            try{
                const response = await fetch(`http://localhost:3000/${userId}/fav/${favId}`);
                const data = await response.json();
                setThisComment(data.comments || "");
            }catch(err){
                console.log(err.message);
            }
            getComment();
        }
    }, [userId, favId])

    const handleAdd = async () => {
        if(comment.trim() !== ""){
            try{
                const response = await fetch(`http://localhost:3000/${userId}/fav/${favId}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({comments: comment})
                });

                const data = await response.json();
                setThisComment(data.userProfile.favs.find(f => f.fav_id === favId).comments);
                setComment("");
            }catch(err){
                console.log(err.message);
            }
        }
    }

    const handleDelete = async () => {
        try{
            const response = await fetch(`http://localhost:3000/${userId}/fav/${favId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({comments: ""})
            });

            const data = await response.json();
            setThisComment(data.userProfile.favs.find(f => f.fav_id === favId).comments);
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