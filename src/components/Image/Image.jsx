import './Image.css';

// returns an image
export default function Image({ url, title, onClick }){
    return <img src={url} alt="Image" onClick={onClick} style={{ cursor: 'pointer' }} />;
}