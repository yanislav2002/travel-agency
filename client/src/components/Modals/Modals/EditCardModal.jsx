import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Modal from '../Modal.jsx';
import PATHS from '../../../paths.js';
import * as offerService from '../../../services/offerService';


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

export default function EditCardModal() {
    const navigate = useNavigate();
    const { _id } = useParams();

    const [offer, setOffer] = useState({
        [FORM_KEYS.title]: '',
        [FORM_KEYS.startDate]: '',
        [FORM_KEYS.endDate]: '',
        [FORM_KEYS.price]: '',
        [FORM_KEYS.transport]: '',
        [FORM_KEYS.numberOfPlaces]: '',
        [FORM_KEYS.locations]: '',
        [FORM_KEYS.imgUrl1]: '',
        [FORM_KEYS.imgUrl2]: '',
        [FORM_KEYS.imgUrl3]: '',
    });

    useEffect(() => {
        offerService.getOneOffer(_id)
            .then(result => {
                setOffer(result);
            }).catch(err => {
                console.log(err);
            });
    }, [_id]);


    const editOfferSubmitHandler = async (event) => {
        event.preventDefault();

        const values = Object.fromEntries(new FormData(event.currentTarget));

        try {
            await offerService.edit(_id, values);

            navigate(PATHS.catalog);
        } catch (err) {
            console.log(err);
        }
    };

    const onChange = (event) => {
        setOffer(state => ({
            ...state,
            [event.target.name]: event.target.value
        }));
    };

    return(
        <Modal>
            <form className='modal-form' onSubmit={editOfferSubmitHandler}> 
                <h2 className='modal-title'>Edit offer</h2>

                <section>
                    <label htmlFor="name">Title:</label>
                    <input 
                        className="modal-text-box" 
                        type="text" 
                        name={FORM_KEYS.title} 
                        value={offer[FORM_KEYS.title]} 
                        onChange={onChange} 
                        required 
                    />
                </section>

                <section className='date-section'>
                    <section>
                        <label>Start date:</label>
                        <input 
                            className="modal-date-box" 
                            type="date" 
                            name={FORM_KEYS.startDate} 
                            value={offer[FORM_KEYS.startDate]} 
                            onChange={onChange} 
                            required 
                        />
                    </section>
                    
                    <section>
                        <label>End date:</label>
                        <input 
                            className="modal-date-box" 
                            type="date" 
                            name={FORM_KEYS.endDate} 
                            value={offer[FORM_KEYS.endDate]} 
                            onChange={onChange} 
                            required
                        />
                    </section>
                </section>

                <section>
                    <label htmlFor="name">Price in euro:</label>
                    <input 
                        className="modal-text-box" 
                        type="number" 
                        name={FORM_KEYS.price} 
                        value={offer[FORM_KEYS.price]}
                        onChange={onChange} 
                        required 
                    />
                </section>

                <section>
                    <label htmlFor="name">Type of transport:</label>
                    <input 
                        className="modal-text-box" 
                        type="text" 
                        name={FORM_KEYS.transport}
                        value={offer[FORM_KEYS.transport]} 
                        onChange={onChange} 
                        required 
                    />
                </section>

                <section>
                    <label htmlFor="name">Number of places:</label>
                    <input 
                        className="modal-text-box" 
                        type="number" 
                        min="20" max="300" 
                        name={FORM_KEYS.numberOfPlaces} 
                        value={offer[FORM_KEYS.numberOfPlaces]}
                        onChange={onChange} 
                        required 
                    />
                </section>

                <section>
                    <label htmlFor="name">Visiting locaitons:</label>
                    <input 
                        className="modal-text-box" 
                        type="text" 
                        name={FORM_KEYS.locations} 
                        value={offer[FORM_KEYS.locations]}
                        onChange={onChange} 
                        required 
                    />
                </section>
                
                <section>
                    <label htmlFor="name">Photo URL 1:</label>
                    <input 
                        className="modal-text-box" 
                        type="text" 
                        name={FORM_KEYS.imgUrl1} 
                        value={offer[FORM_KEYS.imgUrl1]}
                        onChange={onChange} 
                        required 
                    />
                </section>

                <section>
                    <label htmlFor="name">Photo URL 2:</label>
                    <input 
                        className="modal-text-box" 
                        type="text" 
                        name={FORM_KEYS.imgUrl2} 
                        value={offer[FORM_KEYS.imgUrl2]}
                        onChange={onChange} 
                        required 
                    />
                </section>

                <section>
                    <label htmlFor="name">Photo URL 3:</label>
                    <input 
                        className="modal-text-box" 
                        type="text" 
                        name={FORM_KEYS.imgUrl3} 
                        value={offer[FORM_KEYS.imgUrl3]}
                        onChange={onChange} 
                        required 
                    />
                </section>

                <section>
                    <button type="submit">Edit</button>
                </section>
            </form>
        </Modal>
    );
}