import { request } from '../utils/request';


const baseUrl = 'http://localhost:3030/data/offers';

export const getAllOffers = async () => {
    const result = await request('GET', baseUrl);

    return result;
};

export const getOneOffer = async (offerId) => {
    const result = await request('GET', `${baseUrl}/${offerId}`);

    return result;
};

export const create = async (offerData) => {
    const result = await request('POST', baseUrl, offerData);

    return result;
};