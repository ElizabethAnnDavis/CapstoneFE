import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/UserProvider';
import './LoginForm.css';

export default function LoginForm({ setNewUser }){
    const nav = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await login(formData);
        nav('/home'); // what is this doing here? shouldn't it be contained???
    }

    return (
        <div className='forms'>
            <h2>Login</h2>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email: </label>
                <input onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} type='email' id='email' name='email' placeholder='Email' />
                <label htmlFor='password'>Password: </label>
                <input
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    minLength='6'
                />
                <button type='submit'>Log In</button>
            </form>
            <p>Dont have an account? <button onClick={() => setNewUser(true)}>Sign Up</button></p>
        </div>
    );
};