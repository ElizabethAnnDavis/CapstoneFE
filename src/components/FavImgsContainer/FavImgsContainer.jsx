import './FavImgsContainer.css';

export default function FavImgsContainer({ favs }) {
    console.log(favs);
    return(
        <div className='imgSection'>
            {/* <h1>Favorite Images</h1> */}
            {favs.length > 0 ? (
                favs.map((fav, index) => (
                    <div key={index} className="favImg">
                        <img src={fav.img} alt={fav.title} />
                        <p>{fav.title}</p>
                    </div>
                ))
            ) : (
                <p>No favorite images yet.</p>
            )}
        </div>
    );
}