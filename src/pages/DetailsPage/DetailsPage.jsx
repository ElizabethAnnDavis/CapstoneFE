import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './DetailsPage.css';
import apiData from '../../data/apiData.js';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ImageContainer from '../../components/ImageContainer/ImageContainer.jsx'
import CommentsSection from '../../components/CommentsSection/CommentsSection.jsx';

// displays the details of img that now in favs
export default function DetailsPage({index, setIndex, favId}){
    const { title } = useParams();
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