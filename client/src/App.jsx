import Catalog from './pages/Catalog/Catalog.jsx';
import Details from './pages/Details/Details.jsx';
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Profile/Profile.jsx';
import LoginModal from './components/Modals/Modals/LoginModal.jsx';
import RegisterModal from './components/Modals/Modals/RegesterModal.jsx';
import EditCardModal from './components/Modals/Modals/EditCardModal.jsx';
import Error404 from './pages/Error404/Error404.jsx';
import EditProfileModal from './components/Modals/Modals/EditProfileModal.jsx';
import AddCardModal from './components/Modals/Modals/AddCardModal.jsx';
import { Routes, Route } from 'react-router-dom'; 

function App() {
    return (
        <div className="site-body">
            
            <Routes> 
                <Route path="/" element={<Home/>} />
                <Route path="/catalog" element={<Catalog/>} />
                <Route path="/catalog/:offerId" element={<Details/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<Error404/>} />

                <Route path="/catalog/add-offer" element={<AddCardModal/>} />

                <Route path="/modal/register" element={<RegisterModal/>} />
                <Route path="/modal/login" element={<LoginModal/>} />
                <Route path="/modal/edit-card" element={<EditCardModal/>} />
                <Route path="/modal/edit-profile" element={<EditProfileModal/>} />
            </Routes>

        </div>
    );
}

export default App;
