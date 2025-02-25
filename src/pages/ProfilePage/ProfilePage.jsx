import Navbar from '../../components/Navbar/Navbar';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import FavImgsContainer from '../../components/FavImgsContainer/FavImgsContainer';
import PostsSection from '../../components/PostsSection/PostsSection';
import { useAuth } from '../../context/Auth/UserProvider';
import './ProfilePage.css';

export default function ProfilePage(){
    const { cookies } = useAuth();
    console.log("HERE");
    const getProfileData = async() => {
        try{
            const response = await fetch(`http://localhost:3000/api/user/profile/`, {
                method: 'GET',
                headers: { 'x-auth-token': cookies.token }
            });
            console.log("after fetch");

            const data = await response.json();
            console.log(data);
        }catch(err){
            console.error(err.messsage);
        }
    }
    getProfileData();

    return (
        <div>
            <Navbar />
            <div className='profileCont'>
                <ProfileBio/>
                <FavImgsContainer/>
                <PostsSection/>
            </div>
        </div>
    );
}