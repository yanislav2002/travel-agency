import Modal from './Modal.jsx';

export default function RegisterModal() {
    return(
        <Modal>
            <h2 className='modal-title'>Register</h2>

            <section>
                <label htmlFor="name">Name:</label>
                <input className="modal-text-box" type="text" id="name" name="name" required />
            </section>

            <section>
                <label htmlFor="name">Email:</label>
                <input className="modal-text-box" type="email" id="name" name="name" required />
            </section>
            
            <section>
                <label htmlFor="name">Password:</label>
                <input className="modal-text-box" type="password" id="name" name="name" required />
            </section>

            <section>
                <label htmlFor="name">Repeat password:</label>
                <input className="modal-text-box" type="password" id="name" name="name" required />
            </section>

            <section>
                <button type="submit">Register</button>
            </section>

            <p>You already have an acount? <a href="#" className='modal-link' id="register-link">Login from here</a></p>
        </Modal>
    );
}