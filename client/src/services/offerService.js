import calculateDays from '../utils/calculateDays';
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

export const getFilteredOffers = async (filteredValues) => { 
    const allOffers = await request('GET', baseUrl);
    const filteredOffers = [];

    allOffers.forEach(offer => {
        const calcDays = calculateDays(offer.startDate, offer.endDate);

        
        if (Number(filteredValues.price) >= offer.price && Number(filteredValues.days) >= calcDays){
            filteredOffers.push(offer);
        }
    });
    
    return filteredOffers;
};

export const create = async (offerData) => {
    const result = await request('POST', baseUrl, offerData);

    return result;
};

export const edit = async (offerId, offerData) => {
    const result = await request('PUT', `${baseUrl}/${offerId}`, offerData);

    return result;
};

export const remove = async (offerId) => {
    const result = await request('DELETE', `${baseUrl}/${offerId}`);

    return result;
};