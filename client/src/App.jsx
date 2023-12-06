import { Routes, Route, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

import './App.css';
import * as authService from './services/authService.js';
import { AuthProvider } from './contexts/authContext.jsx';
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
import Logout from './components/Logout/Logout.jsx';
import EditCardModal from './components/Modals/Modals/EditCardModal.jsx';
import EditProfileModal from './components/Modals/Modals/EditProfileModal.jsx';
import AddCardModal from './components/Modals/Modals/AddCardModal.jsx';


function App() {
    const accessToken = 'accessToken';
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem(accessToken);

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        
        localStorage.setItem(accessToken, result.accessToken);

        navigate(PATHS.home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password, values.name);

        setAuth(result);

        localStorage.setItem(accessToken, result.accessToken);

        navigate(PATHS.home);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem(accessToken);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler, 
        logoutHandler,
        name: auth.username,
        email: auth.email,
        isAuth: !!auth.accessToken,
    };

    return (
        <AuthProvider value={values}>

                <Header />

                <div className='site-body'>
                    <Routes className='site-body'> 
                        <Route path={PATHS.home} element={<Home/>} />
                        <Route path={PATHS.catalog} element={<Catalog/>} />
                        <Route path={PATHS.details} element={<Details/>} />
                        <Route path={PATHS.addOffer} element={<AddCardModal/>} />
                        <Route path={PATHS.profile} element={<Profile/>} />
                        <Route path={PATHS.error404} element={<Error404/>} />

                        <Route path={PATHS.register} element={<RegisterModal/>} />
                        <Route path={PATHS.login} element={<LoginModal />} />
                        <Route path={PATHS.logout} element={<Logout />} />

                        <Route path={PATHS.editOffer} element={<EditCardModal/>} />
                        <Route path={PATHS.editProfile} element={<EditProfileModal/>} />
                    </Routes>
                </div>

                <Footer />

        </AuthProvider>
    );
}

export default App;
