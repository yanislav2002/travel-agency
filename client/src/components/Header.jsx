import './Header.css';

export default function Header() {
    return(
        <header className='site-header'>
            <a href="#" className='logo-container'><img src="./varna-travel.png" alt="logo" /></a>

            <div className='menu-container'>
                <ul>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Logout</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>
        </header>
    );
}