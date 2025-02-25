import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import FavImgsContainer from '../../components/FavImgsContainer/FavImgsContainer';
import PostsSection from '../../components/PostsSection/PostsSection';
import { useAuth } from '../../context/Auth/UserProvider';
import './ProfilePage.css';

export default function ProfilePage(){
    const { cookies } = useAuth();
    const [profileInfo, setProfileInfo] = useState({ favs: {}, posts: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfileData = async() => {
            try {
                const response = await fetch('http://localhost:3000/api/user/profile/', {
                    method: 'GET',
                    headers: { 'x-auth-token': cookies.token },
                });
                console.log('after fetch');

                const data = await response.json();
                setProfileInfo({
                    favs: data.favs,
                    posts: data.posts,
                });

                setLoading(false);
            } catch (err) {
                console.error(err.message);
                setLoading(false);
            }
        };
        getProfileData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className='profileCont'>
                <ProfileBio/>
                <FavImgsContainer favs={profileInfo.favs}/>
                <PostsSection allPosts={profileInfo.posts}/>
            </div>
        </div>
    );
}