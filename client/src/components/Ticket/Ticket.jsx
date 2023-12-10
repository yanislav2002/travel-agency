import './Ticket.css';


export default function Ticket({adults, title}) {
    return(
        <div className="ticket">
            <div className="ticket-container">
                <h3>{title}</h3>
            </div>
            <aside className='ticket-name'>
                <h3>TICKET</h3>
                <p>{adults}</p>
            </aside>
        </div>
    );
}