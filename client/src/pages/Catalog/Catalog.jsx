import './Catalog.css'; 
import Card from '../../components/Card/Card.jsx';
import Filter from '../../components/Filter/Filter.jsx';

export default function Catalog() {
    return(
        <div className='catalog-page'>

            <div className='catalog-top'>
                <Filter />
                <div className="admin-add-card">
                    <p className='add-card-link'><a href="#" className='admin-link'>Add Offer</a></p>
                </div>
            </div>

            <div className="catalog-cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className='pages'>
                <a href="#">Prev</a>
                <a href="#">Next</a>
            </div>
        </div>
    );
}