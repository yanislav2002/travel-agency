import { Routes, Route, useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

import * as authService from './services/authService.js';
import AuthContext from './contexts/authContext.js';

import Home from './pages/Home/Home.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Details from './pages/Details/Details.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Error404 from './pages/Error404/Error404.jsx';

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

        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
            <div className="site-body">
                
                <Routes> 
                    <Route path="/" element={<Home/>} />
                    <Route path="/catalog" element={<Catalog/>} />
                    <Route path="/catalog/:offerId" element={<Details/>} />
                    <Route path="/catalog/add-offer" element={<AddCardModal/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="*" element={<Error404/>} />

                    <Route path="login" element={<LoginModal />} />

                    <Route path="/modal/register" element={<RegisterModal/>} />
                    <Route path="/modal/edit-card" element={<EditCardModal/>} />
                    <Route path="/modal/edit-profile" element={<EditProfileModal/>} />
                </Routes>

            </div>
        </AuthContext.Provider>
    );
}

export default App;
