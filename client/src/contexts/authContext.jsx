import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import PATHS from '../paths';


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

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

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;