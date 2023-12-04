import './Catalog.css'; 
import Card from '../../components/Card/Card.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as offerService from '../../services/offerService.js';

export default function Catalog() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        offerService.getAllOffers()
            .then(result => setOffers(result));
    }, []);

    console.log(offers);

    return(
        <div className='catalog-page'>

            <div className='catalog-top'>
                <Filter />
                <div className="admin-add-card">
                    <p className='add-card-link'><Link to="/catalog/add-offer" className='admin-link'>Add Offer</Link></p>
                </div>
            </div>

            <div className="catalog-cards">
                
                {offers.map(offer => (
                    <Card {...offer}/>
                ))}

            </div>

            <div className='pages'>
                <a href="#">Prev</a>
                <a href="#">Next</a>
            </div>
        </div>
    );
}