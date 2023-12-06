import './TopOffers.css';
import Card from '../Card/Card.jsx';
import { useEffect, useState } from 'react';
import * as offerService from '../../services/offerService.js';


export default function TopOffers() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
    offerService.getAllOffers().then(result => {
        const sortedOffers = result
        .map(offer => ({ ...offer, price: Number(offer.price) })) 
        .sort((a, b) => a.price - b.price)
        .slice(0, 2);
        
        setOffers(sortedOffers);
    }).catch(err => {
        console.log(err);
    });
    }, []); 

    return (
        <div className='top-offers-container'>
            <div className='text-container'>
            <h2><span>Best</span> Deals</h2>
            <p>Here are the top offers that we are offering</p>
            </div>

            <div className='cards-container'>

                {offers.map(offer => (
                    <Card key={offer._id} {...offer} />
                ))}

                {offers.length == 0 && (
                    <h3>No offers yet</h3>
                )}

            </div>
        </div>
    );
}
    