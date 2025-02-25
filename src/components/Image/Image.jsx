import './Image.css';

export default function Image({ url, title, onClick }){
    return <img src={url} alt="Image" onClick={onClick} style={{ cursor: 'pointer' }} />;
}