import Modal from '../Modal.jsx';
import { useState } from 'react';

const FORM_KEYS = {
    name: 'name',
    email: 'email',
    password: 'password',
    repeatPassword: 'repeatPassword',
};

export default function RegisterModal() {
    const[formValues, setFormValues] = useState({
        [FORM_KEYS.name]: '',
        [FORM_KEYS.email]: '',
        [FORM_KEYS.password]: '',
        [FORM_KEYS.repeatPassword]: '',
    });

    const changeHandler = (event)  => {
        setFormValues(state => ({
            ...state,
            [event.target.name]: event.target.value, 
        }));
    };  

    const sumbitHandler = (event) => {
        event.preventDefault();

        console.log(formValues);
    };

    return(
        <Modal>

            <form className='modal-form' onSubmit={sumbitHandler}> 

                <h2 className='modal-title'>Register</h2>

                <section>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        className="modal-text-box" 
                        id="name" 
                        name={FORM_KEYS.name}
                        value={formValues[FORM_KEYS.name]}
                        onChange={changeHandler}
                        required 
                    />
                </section>

                <section>
                    <label htmlFor="name">Email:</label>
                    <input 
                        type="email" 
                        className="modal-text-box" 
                        id="email" 
                        name={FORM_KEYS.email}
                        value={formValues[FORM_KEYS.email]}
                        onChange={changeHandler}
                        required
                        />
                </section>
                
                <section>
                    <label htmlFor="name">Password:</label>
                    <input 
                        type="password" 
                        className="modal-text-box" 
                        id="pass" 
                        name={FORM_KEYS.password}
                        value={formValues[FORM_KEYS.password]}
                        onChange={changeHandler} 
                        required 
                    />
                </section>

                <section>
                    <label htmlFor="name">Repeat password:</label>
                    <input 
                        className="modal-text-box" 
                        type="password" 
                        id="repass" 
                        name={FORM_KEYS.repeatPassword}
                        value={formValues[FORM_KEYS.repeatPassword]}
                        onChange={changeHandler}
                        required 
                    />
                </section>

                <section>
                    <button type="submit">Register</button>
                </section>

                <p>You already have an acount? <a href="#" className='modal-link' id="register-link">Login from here</a></p>
                
            </form>

        </Modal>
    );
}