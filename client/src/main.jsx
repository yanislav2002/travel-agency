import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <Header />

        <div className='main'>

            <App />

        </div>
        
    </React.StrictMode>,
);
