import './Profile.css';
import Ticket from '../../components/Ticket/Ticket';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContext';
import * as ticketService from '../../services/ticketServices';


export default function Profile() {
    const {
        name,
        email,
    } = useContext(AuthContext);

    const [userTickets, setUserTickets] = useState([]);

    useEffect(() => {
        const fetchUserTickets = async () => {
            try {
                const tickets = await ticketService.getFiltered(email);
                setUserTickets(tickets);
            } catch (error) {
                console.error('Error fetching user tickets:', error);
            }
        };

        fetchUserTickets();
    }, []);

    console.log(userTickets);

    return(
        <div className="profile-page">
            <div className="user-info">

                <div className="user-img-container">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
                </div>

                <div className="user-details">
                    <h4>{name}</h4>
                    <h5>{email}</h5>
                </div>

            </div>

            {email != 'admin@abv.bg' && (<div className="my-tickets">
                <h2>My reserved tickets:</h2>

                <div className="tickets-container">
                    {userTickets.map((ticket) => (
                        <Ticket key={ticket._id} {...ticket} />
                    ))}
                </div>

                {userTickets.length == 0 && (
                    <p>You do not tickets yet</p>
                )}

            </div>)}


        </div>
    );
}