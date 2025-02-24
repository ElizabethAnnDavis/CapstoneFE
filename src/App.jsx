import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Auth from './pages/Auth.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import HomePage from './pages/HomePage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';


export default function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path='/' element={<Auth />}/> */}
        <Route path='/' element={<LoginPage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/details' element={<DetailsPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Route>
        <Route path='*' element={<h1>WELCOME</h1>}/>
      </Routes>
    </>
  )
}