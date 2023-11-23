import './Card.css'; 

export default function Card() {
    return(
        <div className='card-container'>

            <div className="admin-panel">
                <p className='add-card-link'><a href="#" className='admin-link link2'>Edit</a></p>
                <p className='add-card-link'><a href="#" className='admin-link link3'>Delete</a></p>
            </div>
            
            <div className='card-img-container'>
                <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1'/>
            </div>

            <div className='gradient'></div>

            <div className='content'>
                <div className='card-inner-container'>
                    <h3 className='card-title'>Six days trip to Manchester</h3>
                    <p className='card-price'>1290</p>
                </div>

                <p className='card-link'><a href="#">Read More</a></p>
            </div>

        </div>
    );
}

