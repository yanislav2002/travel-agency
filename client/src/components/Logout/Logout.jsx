import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService.js';
import PATHS from '../../paths.js';
import AuthContext from '../../contexts/authContext.js';


export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(PATHS.home);
            })
            .catch(() => navigate(PATHS.home));
    }, []);

    return null;
}