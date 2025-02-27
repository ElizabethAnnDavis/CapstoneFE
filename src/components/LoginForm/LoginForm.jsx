import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/UserProvider';
import './LoginForm.css';

// login an existing user
export default function LoginForm({ setUserId, setNewUser }){
    const nav = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res = await login(formData);
        // if (res.userId) {
        //     setUserId(res.userId);
        //     nav('/home');
        // }
        nav('/home');
    }

    return (
        <div className='forms'>
            {/* <h2>Login</h2> */}
            <form autoComplete='off' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className='emailFeilds'>
                    <label htmlFor='email'>Email: </label>
                    <input onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} type='email' id='email' name='email' placeholder='Email' />
                </div>
                <div className='pswdFeilds'>
                    <label htmlFor='password'>Password: </label>
                    <input
                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        minLength='6'
                    />
                </div>
                <button className='loginBtn' type='submit'>Log In</button>
            </form>
            <p>Dont have an account? <button onClick={() => setNewUser(true)}>Sign Up</button></p>
        </div>
    );
};