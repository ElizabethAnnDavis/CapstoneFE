import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoutBtn from '../LogoutBtn/LogoutBtn';

// returns a navbar to display on the pages
export default function Navbar(){
    return(
        <nav>
            <Link to='/home'>HOME</Link>
            <Link to='/profile'>PROFILE</Link>
            <LogoutBtn/>
        </nav>
    )
}