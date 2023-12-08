import { useContext, useState } from 'react';
import './ReservationPanel.css';
import AuthContext from '../../contexts/authContext';
import * as ticketService from '../../services/ticketServices.js';


export default function ReservationPanel(){
    const [offer, setOffer] = useState({
        'adults': '',
    });

    const {
        name,
        email,
    } = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();

        ticketService.create();
    };

    const onChange = (event) => {
        setOffer(state => ({
            ...state,
            [event.target.name]: event.target.value
        }));
    };

    console.log(offer);

    return(
        <form className="book-container" onSubmit={submitHandler}>
            <h2>Make a reservation</h2>
            <div className='text-area-container'>
                <div>
                    <p>Name</p>
                    <input type="text" className='text-box' value={name}/>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" className='text-box' value={email}/>
                </div>
                <div>
                    <p>Adults</p>
                    <input type="number" min="1" max="5" name="adults" value={offer['adults']} onChange={onChange} className='text-box'/>
                </div>
                <button type='submit'>Book <span>now</span></button>
            </div>
        </form>
    );
}