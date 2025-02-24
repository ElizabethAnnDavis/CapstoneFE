import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return(
        <nav>
            <Link to='/auth'>Login</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </nav>
    )
}