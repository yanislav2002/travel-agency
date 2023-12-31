import './Catalog.css'; 
import Card from '../../components/Card/Card.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import * as offerService from '../../services/offerService.js';
import PATHS from '../../paths.js';
import AuthContext from '../../contexts/authContext.jsx';

export default function Catalog() {
    const [offers, setOffers] = useState([]);
    const [filterValues, setFilterValues] = useState(null);

    const {
        email,
    } = useContext(AuthContext);

    const isAdmin = (email == 'admin@abv.bg');

    useEffect(() => {
        if (filterValues) {

            if (filterValues.price == '' && filterValues.days == '') {
                return;
            }

            offerService.getFilteredOffers(filterValues)
                .then(result => setOffers(result))
                .catch(err => {
                console.log(err);
                });
        } else {
            offerService.getAllOffers()
                .then(result => setOffers(result))
                .catch(err => {
                console.log(err);
                });
        }
    }, [filterValues]);

    const handleFilterSubmit = (values) => {
        setFilterValues(values);
    };

    useEffect(() => {
        offerService.getAllOffers()
            .then(result => setOffers(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return(
        <div className='catalog-page'>

            <div className='catalog-top'>
                <Filter onFilterSubmit={handleFilterSubmit}/> 

                {isAdmin && (
                    <div className="admin-add-card">
                        <p className='add-card-link'><Link to={PATHS.addOffer} className='admin-link'>Add Offer</Link></p>
                     </div>
                )}
            </div>

            <div className="catalog-cards">
                
                {offers.map(offer => (
                    <Card key={offer._id} {...offer}/>
                ))}

                {offers.length == 0 && (
                    <h3 className='no-offers'>No offers yet</h3>
                )}

            </div>
            
        </div>
    );
}