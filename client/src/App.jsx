import { Routes, Route } from 'react-router-dom'; 

import './App.css';
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
import AddCardModal from './components/Modals/Modals/AddCardModal.jsx';
import DeleteCardModal from './components/Modals/Modals/DeleteCardModal.jsx';


function App() {
    return (
        <AuthProvider>

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
                        <Route path={PATHS.deleteOffer} element={<DeleteCardModal/>} />
                    </Routes>
                </div>
                
                <Footer />

        </AuthProvider>
    );
}

export default App;
