import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';


export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<HomePage index={index} setIndex={setIndex}/>}/>
          <Route path='/details/:title' element={<DetailsPage index={index} setIndex={setIndex}/>}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Route>
        <Route path='*' element={<h1>WELCOME</h1>}/>
      </Routes>
    </>
  )
}