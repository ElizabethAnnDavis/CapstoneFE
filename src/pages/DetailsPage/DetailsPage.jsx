import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './DetailsPage.css';
import apiData from '../../data/apiData.js';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ImageContainer from '../../components/ImageContainer/ImageContainer.jsx'
import CommentsSection from '../../components/CommentsSection/CommentsSection.jsx';

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
            <div className='detailsCont'>
                <ImageContainer index={index} setIndex={setIndex}/>
                <CommentsSection />
            </div>
        </div>
    );
}