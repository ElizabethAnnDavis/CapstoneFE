import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth/UserProvider.jsx';
import apiData from '../data/apiData.js';
import Image from '../components/Image/Image.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

// home page, holds clickable images
export default function HomePage({ index, setIndex, userId, setFavId }){
    const navigate = useNavigate();
    const { cookies } = useAuth();

    useEffect(() => {
        const interval = setInterval((() => (setIndex((prevIndex) => (prevIndex + 1) % apiData.length))), 5000);

        return () => clearInterval(interval);
    }, [])

    const image = apiData[index >= 0 && index < apiData.length ? index : 0];

    const handleClick = async () => {
        try{
            const response = await fetch(`https://melikey.onrender.com/api/user/profile/fav`, {
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
            const newFavId = data.favs.find((fav) => fav.title === image.title)?.fav_id;

            if (newFavId) {
                setFavId(newFavId);
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