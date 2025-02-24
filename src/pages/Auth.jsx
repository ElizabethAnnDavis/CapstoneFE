import { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm.jsx';
import SignUpForm from '../components/SignUpForm/SignUpForm.jsx';

export default function Auth(){
    const [newUser, setNewUser] = useState(false);
    return(
        <>
            {newUser ? (<SignUpForm setNewUser={setNewUser}/>) : (<LoginForm setNewUser={setNewUser} />)}
        </>
    )
}