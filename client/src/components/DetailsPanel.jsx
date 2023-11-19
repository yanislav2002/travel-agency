import './DetailsPanel';

export default function DetailsPanel() {
    return(
        <div className="details-container">

            <div className="details-lists">
                <section>
                    <h4>Details of Package:</h4>
                    <ul> 
                        <li><p>Length of stay: 5 nights</p></li>
                        <li><p>Meal plan: Bed & Breakfast</p></li>
                        <li><p>Room Type: 1 Bedroom Luxury Apartment, Lounge, Kitchen</p></li>
                    </ul>
                </section>
                
                <section>
                    <h4>Package Includes:</h4>
                    <ul>
                        <li><p>Taxes</p></li>
                        <li><p>2 way return Airport transfer</p></li>
                        <li><p>8-hour Mahe island tour</p></li>
                    </ul>
                </section>
            </div>

            <div className='details-more-info'>
                <h4>What you will visit:</h4>
                <p>Beau Vallon Beach (15-minute walk), Water sports, 
                    Variety of Restaurants & Supermarkets in the area, Pharmacy, Money Exchange, Casino.</p>
            </div>

        </div>   

    );
}