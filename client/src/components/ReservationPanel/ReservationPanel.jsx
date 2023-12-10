import { useContext, useState } from 'react';
import './ReservationPanel.css';
import AuthContext from '../../contexts/authContext';
import * as ticketService from '../../services/ticketServices.js';


export default function ReservationPanel({_id, title}){
    const {
        name,
        email,
    } = useContext(AuthContext);
    
    const [offer, setOffer] = useState({
        'adults': '',
        'name': name,
        'email': email,
    });

    const submitHandler = async (event) => {
        event.preventDefault();
        
        setOffer((prevOffer) => ({
            ...prevOffer,
            email,
        }));

    
        try{
            const userTickets = await ticketService.getFiltered(email);
            

            // Check if the user already has a ticket with the same _id
            let hasExistingTicket = false;

            for (const ticket of userTickets) {
                if (ticket.title === title) {
                    hasExistingTicket = true;
                    break;
                }
            }

            if (hasExistingTicket) {
                window.alert('You already have a ticket');
            } else {
                ticketService.create(_id, offer, title);
                window.alert('Ticket created successfully');
            }
        } catch (error) {
            console.log(error);
        }
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
                    <input type="text" className='text-box' value={name} name='name' onChange={onChange}/>
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" className='text-box' value={email} name='email' onChange={onChange}/>
                </div>
                <div>
                    <p>Adults</p>
                    <input type="number" min="1" max="5" name="adults" value={offer['adults']} onChange={onChange} className='text-box' required/>
                </div>
                <button type='submit'>Book <span>now</span></button>
            </div>
        </form>
    );
}