import { useContext, useEffect, useState } from 'react';

import './Details.css';
import ReservationPanel from '../../components/ReservationPanel/ReservationPanel';
import ImagePanel from '../../components/ImagePanel/ImagePanel';
import DetailsPanel from '../../components/DetailsPanel/DetailsPanel';
import { useParams } from 'react-router-dom';
import * as offerService from '../../services/offerService';
import AuthContext from '../../contexts/authContext';


export default function Details() {
    const [offer, setOffer] = useState({});
    const { offerId } = useParams();

    const {
        email,
        isAuth
    } = useContext(AuthContext);

    const isAdmin = (email == 'admin@abv.bg');

    useEffect(() => {
        offerService.getOneOffer(offerId)
            .then(setOffer);
    }, [offerId]);

    return(
        <div className="details-page">
            
            <ImagePanel key={offer._id } {...offer}/>

            {(!isAdmin && isAuth) && <ReservationPanel key={offer._id + '1'} {...offer}/>}

            <DetailsPanel key={offer._id + '2'} {...offer}/>
            
        </div>
    );
}