import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='site-header'>
            <Link to="/" className='logo-container'><img src="./varna-travel.png" alt="logo" /></Link>

            <div className='menu-container'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </header>
    );
}