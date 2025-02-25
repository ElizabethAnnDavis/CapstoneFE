import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import apiData from '../data/apiData.js';
import Navbar from '../components/Navbar/Navbar.jsx';
import ImageContainer from '../components/ImageContainer/ImageContainer.jsx'

export default function DetailsPage({index, setIndex}){
    const { title } = useParams();
    //const imageIndex = apiData.findIndex((image) => image.title === title);
    console.log(index);

    // useEffect(() => {
    //     setIndex(imageIndex);
    //     // localStorage.setItem('imageIndex', imageIndex)
    // }, [imageIndex, setIndex]);

    return (
        <div>
            <Navbar />
            <>
                <ImageContainer index={index} setIndex={setIndex}/>
            </>
        </div>
    );
}