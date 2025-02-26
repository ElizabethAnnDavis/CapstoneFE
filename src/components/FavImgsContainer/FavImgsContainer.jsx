import './FavImgsContainer.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth/UserProvider';

export default function FavImgsContainer({ favs, setFavs }) {
    const { cookies } = useAuth();

    useEffect(() => {
        const getUpdatedFavs = async() => {
            try{
                const response = await fetch('http://localhost:3000/api/user/profile/', {
                    method: 'GET',
                    headers: { 'x-auth-token': cookies.token },
                });

                const data = await response.json();
                setFavs(data.favs);
            }catch(err){
                console.log(err.message);
            }
        }
        getUpdatedFavs();
    }, []);

    const handleDelete = async (favId) => {
        try{
            const response = await fetch(`http://localhost:3000/api/user/profile/fav/${favId}`, {
                method: 'DELETE',
                headers: {
                    'x-auth-token': cookies.token,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                let newFav = favs.filter(fav => {
                    console.log(fav);
                    return fav.fav_id !== favId;
                })
                console.log(newFav);
                console.log(favs);
                setFavs(newFav);
            }
        }catch(err){
            console.log(err.message);
        }
    }



    return(
        <div className='imgSection'>
            {favs.length > 0 ? (
                favs.map((fav, i) => (
                    <div className="favImg" key={i}>
                        <img src={fav.img} alt={fav.title} />
                        <div className='imgFooter'>
                            <p>{fav.title}</p>
                            <button className='dltBtn' onClick={() => handleDelete(fav.fav_id)}>X</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Add Some Favorites!</p>
            )}
        </div>
    );
}