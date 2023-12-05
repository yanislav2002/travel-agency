import { Link } from 'react-router-dom';
import './Error404.css';
import PATHS from '../../paths';

export default function Error404() {

    return (
        <div className='error-page'>
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to={PATHS.home}>Go to Home Page</Link>
        </div>
    );
}