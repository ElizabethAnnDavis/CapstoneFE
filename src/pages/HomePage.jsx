import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth/UserProvider.jsx';
import apiData from '../data/apiData.js';
import Image from '../components/Image/Image.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

export default function HomePage({ index, setIndex, userId, setFavId }){
    const navigate = useNavigate();
    const { cookies } = useAuth();
    //const [favId, setFavId] = useState(null);

    useEffect(() => {
        const interval = setInterval((() => (setIndex((prevIndex) => (prevIndex + 1) % apiData.length))), 5000);

        return () => clearInterval(interval);
    }, [])

    const image = apiData[index >= 0 && index < apiData.length ? index : 0];
    //console.log(image);

    const handleClick = async () => {
        try{
            const response = await fetch(`http://localhost:3000/api/user/profile/fav`, {
                method: 'PATCH',
                headers: {
                    'x-auth-token': cookies.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: image.title,
                    img: image.url,
                    disc: image.explanation,
                    comments: ""
                })
            });

            const data = await response.json();
            console.log(data);
            const newFavId = data.favs.find((fav) => fav.title === image.title)?.fav_id;
            console.log(newFavId);

            if (newFavId) {
                setFavId(newFavId);
                console.log("Favorite added with ID:", newFavId);
                navigate(`/details/${newFavId}`);
            } else {
                console.error('Failed to add favorite');
            }
        }catch(err){
            console.error(err.message);
        }
    }

    return (
        <div>
            <Navbar />
            <>
                <Image url={image.url} title={image.title} onClick={handleClick} />
            </>
        </div>
    );
}