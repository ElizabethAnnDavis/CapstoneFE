import './LogoutBtn.css';
import { useAuth } from '../../context/Auth/UserProvider';
import { useNavigate } from 'react-router-dom';

// logs out user
export default function LogoutBtn(){
    const nav = useNavigate();
    const {logout} = useAuth();
    return(
        <>
            <button className='logoutBtn' onClick={async() => (await logout(), nav('/'))}>LOGOUT</button>
        </>
    );
}