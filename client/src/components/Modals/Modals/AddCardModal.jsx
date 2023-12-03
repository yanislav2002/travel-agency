import Modal from '../Modal';

export default function AddCardModal() {
    return(
        <Modal>
            <form className='modal-form'> 
                <h2 className='modal-title'>Add offer</h2>

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
                    <button type="submit">Add</button>
                </section>
            </form>
        </Modal>
    );
}