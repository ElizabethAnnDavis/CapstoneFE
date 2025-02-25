import { useState, createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';

const AppContext = createContext();

export default function UserProvider({ children }){
    const [cookies, setCookies, removeCookie] = useCookies();
    const [userId, setUserId] = useState(null);

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
            setUserId(data.user_id);
        }catch(err){
            console.error(err.message);
        }
    }

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
            setUserId(data.user_id);
        }catch(err){
            console.error(err.message);
        }
    }

    function logout(){
        ['token'].forEach((obj) => removeCookie(obj));
        setUserId(null);
    }

    // makes things more efficient
    const value = useMemo(() => ({ cookies, login, logout, signUp, userId, setUserId }), [cookies, userId]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// so we only have to import once???
export function useAuth(){
    return useContext(AppContext);
}