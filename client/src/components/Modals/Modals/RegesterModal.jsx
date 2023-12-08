import { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Modal from '../Modal.jsx';
import AuthContext from '../../../contexts/authContext.jsx';
import useForm from '../../../custom-hooks/useForm.js';
import PATHS from '../../../paths.js';


const FORM_KEYS = {
    name: 'name',
    email: 'email',
    password: 'password',
    repeatPassword: 'repeatPassword',
};

export default function RegisterModal() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [FORM_KEYS.name]: '',
        [FORM_KEYS.email]: '',
        [FORM_KEYS.password]: '',
        [FORM_KEYS.repeatPassword]: '',
    });

    const navigate = useNavigate();

    return(
        <Modal>
            <span className="close"  onClick={() => navigate(PATHS.home)}>&times;</span>

            <form className='modal-form' onSubmit={onSubmit}> 

                <h2 className='modal-title'>Register</h2>

                <section>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        className="modal-text-box" 
                        id="name" 
                        name={FORM_KEYS.name}
                        value={values[FORM_KEYS.name]}
                        onChange={onChange}
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
                        value={values[FORM_KEYS.email]}
                        onChange={onChange}
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
                        value={values[FORM_KEYS.password]}
                        onChange={onChange} 
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
                        value={values[FORM_KEYS.repeatPassword]}
                        onChange={onChange}
                        required 
                    />
                </section>

                <section>
                    <button type="submit">Register</button>
                </section>

                <p>You already have an acount? 
                    <Link to={PATHS.login} className='modal-link' id="register-link">Login from here</Link>
                </p>
                
            </form>

        </Modal>
    );
}