import Modal from './Modal.jsx';

export default function LoginModal() {
    return(
        <Modal>
            <h2 className='modal-title'>Login</h2>

            <section>
                <label htmlFor="name">Email:</label>
                <input className="modal-text-box" type="email" id="name" name="name" required />
            </section>
            
            <section>
                <label htmlFor="name">Password:</label>
                <input className="modal-text-box" type="password" id="name" name="name" required />
            </section>

            <section>
                <button type="submit">Login</button>
            </section>

            <p>You are not registered yet? <a href="#" className='modal-link'>Sign in now</a></p>
        </Modal> 
    );
}