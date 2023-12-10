import { request } from '../utils/request';

const baseUrl = 'http://localhost:3030/data/tickets';

export const create = async (_id, offer, title) => {
    try {
        const newTicket = await request('POST', baseUrl, {
            _id,
            ...offer,
            title
        });

        return newTicket;
    } catch (error) {
        console.error(error);
        throw error; 
    }
};

export const getFiltered = async (email) => {
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch tickets');
        }

        const tickets = await response.json();

        const filteredTickets = tickets.filter(ticket => ticket.email === email);

        return filteredTickets;
    } catch (error) {
        console.log(error);
    }
};

