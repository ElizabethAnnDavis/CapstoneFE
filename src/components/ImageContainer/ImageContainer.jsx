import apiData from '../../data/apiData.js';
import Caption from '../Caption/Caption.jsx';
import Image from '../Image/Image.jsx';
import Title from '../Title/Title.jsx';

// returns an image with title and caption
export default function ImageContainer({ index }){
    const image = apiData[index];

    return image ? ( 
        <div>
            <Title title={image.title}/>
            <Image url={image.url} />
            <Caption caption={image.explanation}/>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
}