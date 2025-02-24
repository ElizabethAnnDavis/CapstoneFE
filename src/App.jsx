//import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';


export default function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/auth' element={<Auth />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
        <Route path='*' element={<h1>WELCOME</h1>}/>
      </Routes>
    </>
  )
}