import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiData from '../data/apiData.js';
import Image from '../components/Image/Image.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

export default function HomePage({ index, setIndex }){
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval((() => (setIndex((prevIndex) => (prevIndex + 1) % apiData.length))), 5000);

        return () => clearInterval(interval);
    }, [])

    const image = apiData[index >= 0 && index < apiData.length ? index : 0];

    return (
        <div>
            <Navbar />
            <>
                <Image url={image.url} title={image.title} onClick={() => navigate(`/details/${image.title}`)} />
            </>
        </div>
    );
}