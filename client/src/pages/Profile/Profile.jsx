import './Profile.css';
import Ticket from '../../components/Ticket/Ticket';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

export default function Profile() {
    const {
        name,
        email,
    } = useContext(AuthContext);

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

            <div className="my-tickets">
                <h2>My reserved tickets:</h2>

                <div className="tickets-container">
                    <Ticket />
                    <Ticket />
                </div>
            </div>


        </div>
    );
}