import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
//import axios from 'axios';

const AppContext = createContext();

//export const UserProvider = ({ children }) => {}
export default function UserProvider({ children }){
    // would like some explanation about this line
    // 1. object containing all cookies 
    // 2. sets the value a cookie taking name, value, and path as args
    // 3. a function to delete a cookie taking the name and options(optional) as args
    const [cookies, setCookies, removeCookie] = useCookies();

    // const login = async(formData) => {
    //     let res = await axios({
    //         method: 'POST',
    //         url: 'http://localhost:3000/api/auth',
    //         data: formData,
    //     });

    //     // token is the cookie name, res.data.token is the value of the cookie
    //     setCookies('token', res.data.token); // your token
    // }

    async function login(formData){
        try{
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setCookies('token', data.token);
        }catch(err){
            console.error(err.message);
        }
    }

    // const signUp = async (formData) => {
    //     let res = await axios({
    //         method: 'POST',
    //         url: 'http://localhost:3000/api/users',
    //         data: formData,
    //     });

    //     setCookies('token', res.data.token);
    // }

    async function signUp(formData){
        try{
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setCookies('token', data.token);
        }catch(err){
            console.error(err.message);
        }
    }

    function logout(){
        ['token'].forEach((obj) => removeCookie(obj));
    }

    // makes things more efficient
    const value = useMemo(() => ({cookies, login, logout, signUp}), [cookies]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// so we only have to import once???
export function useAuth(){
    return useContext(AppContext);
}