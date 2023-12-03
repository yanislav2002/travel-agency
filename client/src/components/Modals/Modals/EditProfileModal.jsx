import Modal from '../Modal';

export default function EditProfileModal() {
    return(
        <Modal>
            <form className='modal-form'> 
                <h2 className='modal-title'>Edit Profile</h2>

                <section>
                    <label htmlFor="name">New email:</label>
                    <input className="modal-text-box" type="email" required />
                </section>
                
                <section>
                    <label htmlFor="name">New name:</label>
                    <input className="modal-text-box" type="text" required />
                </section>

                <section>
                    <label htmlFor="name">New image url:</label>
                    <input className="modal-text-box" type="text" required />
                </section>

                <section>
                    <button type="submit">Edit</button>
                </section>
            </form>
        </Modal>
    );
}