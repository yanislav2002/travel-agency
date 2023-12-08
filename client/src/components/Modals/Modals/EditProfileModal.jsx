import { useNavigate } from 'react-router-dom';

import Modal from '../Modal';
import PATHS from '../../../paths';


export default function EditProfileModal() {
    const navigate = useNavigate();

    return(
        <Modal>
            <span className="close"  onClick={() => navigate(PATHS.profile)}>&times;</span>

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