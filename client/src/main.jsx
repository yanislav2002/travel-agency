import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header.jsx';
import App from './App.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
        <BrowserRouter>

            <Header />

            <div className='main'>

                    <App />

            </div>
            
            <Footer />

        </BrowserRouter>

    </React.StrictMode>,
);
