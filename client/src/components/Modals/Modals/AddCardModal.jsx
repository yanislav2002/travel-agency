import { useNavigate } from 'react-router-dom';

import * as gameService from '../../../services/offerService';
import PATHS from '../../../paths';

import Modal from '../Modal';


const FORM_KEYS = {
    title: 'title',
    startDate: 'startDate', 
    endDate: 'endDate',
    price: 'price',
    transport: 'transport',
    numberOfPlaces: 'numberOfPlaces',
    locations: 'locations',
    imgUrl1: 'imgUrl1',
    imgUrl2: 'imgUrl2',
    imgUrl3: 'imgUrl3',
};

export default function AddCardModal() {
    const navigate = useNavigate();

    const createOfferSubmitHandler = async (event) => {
        event.preventDefault();

        const offerData = Object.fromEntries(new FormData(event.currentTarget));

        try {
            await gameService.create(offerData);
    
            navigate(PATHS.catalog);
        } catch(err) {
            console.log(err);
        }
    };

    return(
        <Modal>
            <form className='modal-form' onSubmit={createOfferSubmitHandler}> 
                <h2 className='modal-title'>Add offer</h2>

                <section>
                    <label htmlFor="name">Title:</label>
                    <input className="modal-text-box" type="text" name={FORM_KEYS.title} required />
                </section>

                <section className='date-section'>
                    <section>
                        <label>Start date:</label>
                        <input className="modal-date-box" type="date" name={FORM_KEYS.startDate}/>
                    </section>
                    
                    <section>
                        <label>End date:</label>
                        <input className="modal-date-box" type="date" name={FORM_KEYS.endDate}/>
                    </section>
                </section>

                <section>
                    <label htmlFor="name">Price in euro:</label>
                    <input className="modal-text-box" type="number" name={FORM_KEYS.price} required />
                </section>

                <section>
                    <label htmlFor="name">Type of transport:</label>
                    <input className="modal-text-box" type="text" name={FORM_KEYS.transport} required />
                </section>

                <section>
                    <label htmlFor="name">Number of places:</label>
                    <input className="modal-text-box" type="number" min="20" max="300" name={FORM_KEYS.numberOfPlaces} required />
                </section>

                <section>
                    <label htmlFor="name">Visiting locaitons:</label>
                    <input className="modal-text-box" type="text" name={FORM_KEYS.locations} required />
                </section>
                
                <section>
                    <label htmlFor="name">Photo URL 1:</label>
                    <input className="modal-text-box" type="text" name={FORM_KEYS.imgUrl1} required />
                </section>

                <section>
                    <label htmlFor="name">Photo URL 2:</label>
                    <input className="modal-text-box" type="text" name={FORM_KEYS.imgUrl2} required />
                </section>

                <section>
                    <label htmlFor="name">Photo URL 3:</label>
                    <input className="modal-text-box" type="text" name={FORM_KEYS.imgUrl3} required />
                </section>

                <section>
                    <button type="submit">Add</button>
                </section>
            </form>
        </Modal>
    );
}