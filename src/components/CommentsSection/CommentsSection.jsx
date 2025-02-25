//import './CommentsSection.css';
import { useState } from 'react';

export default function CommentsSection(){
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleAdd = () => {
        if(comment.trim() !== ""){
            setComments([...comments, comment]);
            setComment("");
        }
    };

    return(
        <div>
            <h1>Comments</h1>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
            <div>
                {comments.length > 0 ? (
                    comments.map((comment, i) => (
                        <div key={i}><p>{comment}</p></div>
                    ))
                ):(
                    <p>Add your comments here</p>
                )}
            </div>
        </div>
    );
}