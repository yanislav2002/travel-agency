import { Routes, Route, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

import './App.css';
import * as authService from './services/authService.js';
import AuthContext from './contexts/authContext.js';
import PATHS from './paths.js';

import Home from './pages/Home/Home.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Details from './pages/Details/Details.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Error404 from './pages/Error404/Error404.jsx';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginModal from './components/Modals/Modals/LoginModal.jsx';
import RegisterModal from './components/Modals/Modals/RegesterModal.jsx';
import EditCardModal from './components/Modals/Modals/EditCardModal.jsx';
import EditProfileModal from './components/Modals/Modals/EditProfileModal.jsx';
import AddCardModal from './components/Modals/Modals/AddCardModal.jsx';


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(PATHS.home);
    };

    return (
        <AuthContext.Provider value={{ loginSubmitHandler, ...auth }}>

                <Header />

                <div className='site-body'>
                    <Routes className='site-body'> 
                        <Route path={PATHS.home} element={<Home/>} />
                        <Route path={PATHS.catalog} element={<Catalog/>} />
                        <Route path={PATHS.details} element={<Details/>} />
                        <Route path={PATHS.addOffer} element={<AddCardModal/>} />
                        <Route path={PATHS.profile} element={<Profile/>} />
                        <Route path={PATHS.error404} element={<Error404/>} />

                        <Route path={PATHS.login} element={<LoginModal />} />

                        <Route path={PATHS.register} element={<RegisterModal/>} />
                        <Route path={PATHS.editOffer} element={<EditCardModal/>} />
                        <Route path={PATHS.editProfile} element={<EditProfileModal/>} />
                    </Routes>
                </div>

                <Footer />

        </AuthContext.Provider>
    );
}

export default App;
