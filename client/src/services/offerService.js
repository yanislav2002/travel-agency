import { request } from '../utils/request';


const baseUrl = 'http://localhost:3030/jsonstore/offers';

export const getAllOffers = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
};

export const getOneOffer = async (offerId) => {
    const result = await request('GET', `${baseUrl}/${offerId}`);

    return result;
};

export const create = async (offerData) => {
    const result = await request('POST', baseUrl, offerData);

    return result;
};