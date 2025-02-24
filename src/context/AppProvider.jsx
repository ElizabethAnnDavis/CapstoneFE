import UserProvider from './Auth/UserProvider.jsx';

export default function AppProvider({ children }){
    return <UserProvider>{children}</UserProvider>
}