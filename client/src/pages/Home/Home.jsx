import './Home.css';
import TopOffers from '../../components/TopOffers/TopOffers';
// import SearchPanel from '../../components/SearchPanel/SearchPanel';

export default function Home() {
    return(
        <div className="home-page">

            <div className='search-panel-container'>
                <div className='img-container'>
                    <h1>Welcome</h1>
                    <img src="https://wallpapercosmos.com/w/full/3/0/0/293533-3840x2160-desktop-4k-rome-wallpaper.jpg" alt="" />
                </div>
            </div>

            <TopOffers />
            
        </div>
    );
}