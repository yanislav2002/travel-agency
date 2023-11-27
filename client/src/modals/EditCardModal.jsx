import Modal from './Modal.jsx';

export default function EditCardModal() {
    return(
        <Modal>
            <h2 className='modal-title'>Edit offer</h2>

            <section>
                <label htmlFor="name">Destination:</label>
                <input className="modal-text-box" type="text" required />
            </section>

            <section className='date-section'>
                <section>
                    <label>Start date:</label>
                    <input className="modal-date-box" type="date" />
                </section>
                
                <section>
                    <label>End date:</label>
                    <input className="modal-date-box" type="date" />
                </section>
            </section>

            <section>
                <label htmlFor="name">Type of transport:</label>
                <input className="modal-text-box" type="text" required />
            </section>

            <section>
                <label htmlFor="name">Number of places:</label>
                <input className="modal-text-box" type="number" min="20" max="300" required />
            </section>

            <section>
                <label htmlFor="name">Places to visit:</label>
                <input className="modal-text-box" type="text" required />
            </section>

            <section>
                <button type="submit">Edit</button>
            </section>
        </Modal>
    );
}