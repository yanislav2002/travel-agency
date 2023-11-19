import './Card.css'; 

export default function Card() {
    return(
        <div className='card-container'>

            <div className='gradient'></div>
            
            <div className='card-inner-container'>
                <h3 className='card-title'>Six days trip to Manchester</h3>
                <p className='card-price'>1290</p>
            </div>

            <div className='card-img-container'>
                <img src='img/manchester.jpg'/>
            </div>

            <p className='card-link'><a href="#">Read More</a></p>

        </div>
    );
}

