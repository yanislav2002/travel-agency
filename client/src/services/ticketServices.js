import * as request from '../utils/request';

const baseUrl = 'http://localhost:3030/data/tickets';

export const getAll = async (_id) => {
    const query = new URLSearchParams({
        where: `_id="${_id}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (_id, text) => {
    const newTicket= await request.post(baseUrl, {
        _id,
        text,
    });

    return newTicket;
};