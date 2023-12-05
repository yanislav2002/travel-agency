import Modal from '../Modal.jsx';
import useForm from '../../../custom-hooks/useForm.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../contexts/authContext.js';

const FORM_KEYS = {
    email: 'email',
    password: 'password',
};

export default function LoginModal() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [FORM_KEYS.email]: '',
        [FORM_KEYS.password]: '',
    });

    return(
        <Modal>
            <form className='modal-form' onSubmit={onSubmit}> 
                <h2 className='modal-title'>Login</h2>

                <section>
                    <label htmlFor="name">Email:</label>
                    <input 
                        className="modal-text-box" 
                        type="email" 
                        id="name" 
                        name={FORM_KEYS.email}
                        value={values[FORM_KEYS.email]}
                        onChange={onChange}
                        required 
                    />
                </section>
                
                <section>
                    <label htmlFor="name">Password:</label>
                    <input 
                        className="modal-text-box" 
                        type="password" 
                        id="password" 
                        name={FORM_KEYS.password}
                        value={values[FORM_KEYS.password]}
                        onChange={onChange}
                        required 
                    />
                </section>

                <section>
                    <button type="submit">Login</button>
                </section>

                <p>You are not registered yet? <Link to="/register" className='modal-link'>Sign in now</Link></p>
            </form>
        </Modal> 
    );
}