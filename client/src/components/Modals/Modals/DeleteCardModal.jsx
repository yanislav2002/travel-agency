import { useNavigate, useParams } from 'react-router-dom';

import Modal from '../Modal.jsx';
import PATHS from '../../../paths.js';
import * as offerService from '../../../services/offerService';


export default function DeleteCardModal() {
    const navigate = useNavigate();
    const { _id } = useParams();

    const deleteOfferSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            await offerService.remove(_id);
            navigate(PATHS.catalog);
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <Modal>
            <span className="close"  onClick={() => navigate(PATHS.catalog)}>&times;</span>

            <form className='modal-form' onSubmit={deleteOfferSubmitHandler}> 
                <p>Are you sure you want to delete?</p>
            
                <section>
                    <button type="submit">Delete</button>
                </section>
            </form>
        </Modal>
    );
}