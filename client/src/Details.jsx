import './Details.css';
import ReservationPanel from './components/ReservationPanel';
import ImagePanel from './components/ImagePanel';
import DetailsPanel from './components/DetailsPanel';

export default function Details() {
    return(
        <div className="details-page">
            
            <ImagePanel />

            <ReservationPanel />

            <DetailsPanel />
            
        </div>
    );
}