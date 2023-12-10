import { request } from '../utils/request';


const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    try {
        const result = await request('POST', `${baseUrl}/login`, {email, password});

        return result;
    } catch(error) {
        console.log(error);
    }
};

export const register = (email, password, username) => request('POST', `${baseUrl}/register`, {email, password, username, 'tickets': []});

export const logout = () => request('GET', `${baseUrl}/logout`);
