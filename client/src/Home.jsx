import './Home.css';
import TopOffers from './components/TopOffers';
import SearchPanel from './components/SearchPanel';

export default function Home() {
    return(
        <div className="home-page">

            <SearchPanel />

            <TopOffers />
            
        </div>
    );
}