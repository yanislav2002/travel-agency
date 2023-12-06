import { Link } from 'react-router-dom';

import './Card.css'; 
import PATHS from '../../paths';
import { pathToUrl } from '../../utils/pathUtils';


export default function Card({_id, imgUrl1, title, price}) {

    return(
        <div className='card-container'>

            <div className="admin-panel">
                <p className='add-card-link'><Link to={pathToUrl(PATHS.editOffer, {_id})} className='admin-link link2'>Edit</Link></p>
                <p className='add-card-link'><Link to={pathToUrl(PATHS.deleteOffer, {_id})} className='admin-link link3'>Delete</Link></p>
            </div>
            
            <div className='card-img-container'>
                <img src={imgUrl1}/>
            </div>

            <div className='gradient'></div>

            <div className='content'>
                <div className='card-inner-container'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-price'>{price}</p>
                </div>

                <p className='card-link'><Link to={`/offers/${_id}`}>Read More</Link></p>
            </div>

        </div>
    );
}

