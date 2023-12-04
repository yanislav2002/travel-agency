import { request } from "../utils/request";


const baseUrl = 'http://localhost:3030/jsonstore/offers';

export const getAllOffers = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
};

export const create = async (offerData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(offerData),
    });

    const result = await response.json();

    return result;
};