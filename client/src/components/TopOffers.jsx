import './TopOffers.css';
import Card from './Card.jsx';

export default function TopOffers() {
    return(
        <div className='top-offers-container'>
            <div className='text-container'>
                <h2><span>Best</span> Deals</h2>
                <p>Here are the top offers, that we are offering</p>
            </div>

            <div className='cards-container'>
                <Card />
                <Card />
            </div>
        </div>
    );
}