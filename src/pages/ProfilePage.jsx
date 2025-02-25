import Navbar from '../components/Navbar/Navbar';
import ProfileBio from '../components/ProfileBio/ProfileBio';
import FavImgsContainer from '../components/FavImgsContainer/FavImgsContainer';
import PostsSection from '../components/PostsSection/PostsSection';

export default function ProfilePage(){
    return (
        <div>
            <Navbar />
            <>
                {/* <h1>Only Users Should See Profile Page</h1> */}
                <ProfileBio/>
                <FavImgsContainer/>
                <PostsSection/>
            </>
        </div>
    );
}