import Navbar from '../components/Navbar/Navbar';

export default function Dashboard(){
    return (
        <div>
            <Navbar />
            <>
                <h1>Only Users Should See Profile Page</h1>
            </>
        </div>
    );
}