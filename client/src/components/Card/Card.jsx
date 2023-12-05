import { Link } from 'react-router-dom';
import './Card.css'; 

export default function Card({_id, imgUrl1, title, price}) {
    return(
        <div className='card-container'>

            <div className="admin-panel">
                <p className='add-card-link'><a href="#" className='admin-link link2'>Edit</a></p>
                <p className='add-card-link'><a href="#" className='admin-link link3'>Delete</a></p>
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

                <p className='card-link'><Link to={`/catalog/${_id}`}>Read More</Link></p>
            </div>

        </div>
    );
}

