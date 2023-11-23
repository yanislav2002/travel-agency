import './Profile.css';
import Ticket from './components/Ticket';

export default function Profile() {
    return(
        <div className="profile-page">
            <div className="user-info">

                <div className="user-img-container">
                    <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1328"/>
                </div>

                <div className="user-details">
                    <h4>Jivko Milanov</h4>
                    <h5>jivkom94@abv.bg</h5>
                    <p>user</p>
                </div>

                <div className="user-links">
                    <p className='card-link'><a href="#">Edit</a></p>
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