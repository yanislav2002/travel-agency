import './Details.css';
import ReservationPanel from '../../components/ReservationPanel/ReservationPanel';
import ImagePanel from '../../components/ImagePanel/ImagePanel';
import DetailsPanel from '../../components/DetailsPanel/DetailsPanel';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as offerService from '../../services/offerService';

export default function Details() {
    const [offer, setOffer] = useState({});
    const { offerId } = useParams();

    useEffect(() => {
        offerService.getOneOffer(offerId)
            .then(setOffer);
    }, [offerId]);

    return(
        <div className="details-page">
            
            <ImagePanel key={offer._id} {...offer}/>

            <ReservationPanel key={offer._id} {...offer}/>

            <DetailsPanel key={offer._id} {...offer}/>
            
        </div>
    );
}