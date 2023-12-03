import './Error404.css';

export default function Error404() {

    return (
        <div className='error-page'>
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="#">Go to Home Page</a>
        </div>
    );
}