import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import PATHS from '../../paths';
import AuthContext from '../../contexts/authContext';


export default function Header() {
    const {
        isAuth,
    } = useContext(AuthContext);


    return(
        <header className='site-header'>
            <Link to={PATHS.home} className='logo-container'><img src="./varna-travel.png" /></Link>

            <div className='menu-container'>
                <ul>
                    <li><Link to={PATHS.home}>Home</Link></li>
                    <li><Link to={PATHS.catalog}>Catalog</Link></li>

                    {!isAuth && (
                        <>
                            <li><Link to={PATHS.login}>Login</Link></li>
                            <li><Link to={PATHS.register}>Register</Link></li>
                        </>
                    )}

                    {isAuth && (
                        <>
                            <li><Link to={PATHS.profile}>Profile</Link></li>
                            <li><Link to={PATHS.logout}>Logout</Link></li>
                        </>
                    )}

                </ul>
            </div>
        </header>
    );
}