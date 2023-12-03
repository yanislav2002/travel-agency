import './Home.css';
import TopOffers from '../../components/TopOffers/TopOffers';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

export default function Home() {
    return(
        <div className="home-page">

            <SearchPanel />

            <TopOffers />
            
        </div>
    );
}