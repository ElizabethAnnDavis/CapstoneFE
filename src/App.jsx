import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';


export default function App() {
  const [index, setIndex] = useState(0);
  const [favId, setFavId] = useState(0);
  const [userId, setUserId] = useState(null);

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage userId={userId} setUserId={setUserId}/>}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<HomePage index={index} setIndex={setIndex} userId={userId} setFavId={setFavId}/>}/>
          <Route path='/details/:favId' element={<DetailsPage index={index} setIndex={setIndex}/>}/>
          <Route path='/profile' element={<ProfilePage userId={userId}/>}/>
        </Route>
        <Route path='*' element={<h1>WELCOME</h1>}/>
      </Routes>
    </>
  )
}