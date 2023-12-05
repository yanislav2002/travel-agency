import './DetailsPanel';

export default function DetailsPanel({startDate, endDate, price, transport, numberOfPlaces, locations}) {
    return(
        <div className="details-container">

            <div className="details-lists">
                <section>
                    <h4>Details of Package:</h4>
                    <ul> 
                        <li><p>Length of stay: {startDate} - {endDate}</p></li>
                        <li><p>Price: {price} €</p></li>
                        <li><p>Available places: {numberOfPlaces}</p></li>
                        <li><p>Transport: {transport}</p></li>
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
                <p>{locations}</p>
            </div>

        </div>   

    );
}