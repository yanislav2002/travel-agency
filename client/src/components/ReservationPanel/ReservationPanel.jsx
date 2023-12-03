import './ReservationPanel.css';

export default function ReservationPanel(){
    return(
        <form action="" className="book-container">
            <h2>Make a reservation</h2>
            <div className='text-area-container'>
                <div>
                    <p>Name</p>
                    <input type="text" className='text-box'/>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" className='text-box'/>
                </div>
                <div>
                    <p>Adults</p>
                    <input type="number" min="1" max="5" className='text-box'/>
                </div>
                <button type='submit'>Book <span>now</span></button>
            </div>
        </form>
    );
}