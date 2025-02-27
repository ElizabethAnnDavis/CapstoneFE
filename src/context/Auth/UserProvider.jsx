import { useState, createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';

const AppContext = createContext();

export default function UserProvider({ children }){
    const [cookies, setCookies, removeCookie] = useCookies();
    //const [userId, setUserId] = useState(null);

    async function login(formData){
        try{
            const response = await fetch('https://melikey.onrender.com/api/auth', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            //console.log('Response data:', data);

            if (data.token) {
                setCookies('token', data.token);
            }

            // console.log('User ID from data:', data.user_id);
            // if (data.user_id !== undefined) {
            //     setUserId(data.user_id);
            //     console.log(userId);
            // }
        
            // console.log('Stored User ID:', userId);
            //console.log('User ID from data:', data.user_id);
        }catch(err){
            console.error(err.message);
        }
    }

    async function signUp(formData){
        try{
            const response = await fetch('https://melikey.onrender.com/api/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            //console.log('Response data:', data);

            if (data.token) {
                setCookies('token', data.token);
            }
            // if (data.user_id !== undefined) {
            //     setUserId(data.user_id);
            // }
        
            // console.log('Stored User ID:', userId);
            // console.log('User ID from data:', data.user_id);
        }catch(err){
            console.error(err.message);
        }
    }

    function logout(){
        ['token'].forEach((obj) => removeCookie(obj));
        //setUserId(null);
    }

    // makes things more efficient
    const value = useMemo(() => ({ cookies, login, logout, signUp}), [cookies]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// so we only have to import once???
export function useAuth(){
    return useContext(AppContext);
}