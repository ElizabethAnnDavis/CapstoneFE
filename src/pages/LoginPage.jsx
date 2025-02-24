import { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import SignUpForm from '../components/SignUpForm/SignUpForm.jsx';
import LogoutBtn from '../components/LogoutBtn/LogoutBtn.jsx';

export default function LoginPage(){
    const [newUser, setNewUser] = useState(false);
    return(
        <>
            <LogoutBtn/>
            {newUser ? (<SignUpForm setNewUser={setNewUser}/>) : (<LoginForm setNewUser={setNewUser} />)}
        </>
    )
}