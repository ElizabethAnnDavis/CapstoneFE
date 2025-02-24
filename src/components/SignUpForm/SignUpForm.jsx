import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/UserProvider';
import './SignUpForm.css';

export default function SignUpForm({ setNewUser }){
    const nav = useNavigate();
    const { signUp } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });

    // const handleClick = () => {
    //     setNewUser(false);
    // };
    
    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let res = await signUp(formData);
        nav('/dashboard'); // what is this doing here? shouldn't it be contained???
    }

    return(
        <div className='forms'>
            <h2>SignUp</h2>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor='name1'>Name: </label>
                <input
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    type='text'
                    id='name1'
                    name='name'
                    placeholder='First and Last Name'
                />
                <label htmlFor='email1'>Email: </label>
                <input
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    type='email'
                    id='email1'
                    name='email'
                    placeholder='Email'
                />
                <label htmlFor='password1'>Password: </label>
                <input
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    type='password'
                    id='password1'
                    name='password'
                    placeholder='Password'
                    minLength='6'
                />
                <input
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                    type='password'
                    id='password2'
                    name='password2'
                    placeholder='Confirm Password'
                    minLength='6'
                />
                <button type='submit'>Sign In</button>
            </form>
            <p>Already have an account? <button onClick={() => setNewUser(false)}>Sign In</button></p>
        </div>
    );
}