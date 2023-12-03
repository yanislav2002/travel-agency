import './Details.css';
import ReservationPanel from '../../components/ReservationPanel/ReservationPanel';
import ImagePanel from '../../components/ImagePanel/ImagePanel';
import DetailsPanel from '../../components/DetailsPanel/DetailsPanel';

export default function Details() {
    return(
        <div className="details-page">
            
            <ImagePanel />

            <ReservationPanel />

            <DetailsPanel />
            
        </div>
    );
}