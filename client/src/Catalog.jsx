import './Catalog.css'; 
import Card from './components/Card.jsx';

export default function Catalog() {
    return(
        <div className='catalog-page'>
            
            <div className="cards-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}