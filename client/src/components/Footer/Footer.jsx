import './Footer.css';

export default function Footer() {
    return(
        <div className='site-footer'>
            <div className="footer-logo-container">
                <img src="varna-travel-logo.png"/>
            </div>
            <div>
                <p>Explore the world with our travel agency. Your journey begins here!</p>
            </div>
            <div>
                <ul>
                    <li><a href="/nopage">Destinations</a></li>
                    <li><a href="/nopage">Packages</a></li>
                    <li><a href="/nopage">Contact Us</a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Your Travel Agency. All rights reserved.</p>
                <p>SoftUni ReactJS Project</p>
            </div>
        </div>
    );
}