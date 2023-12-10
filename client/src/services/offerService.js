import calculateDays from '../utils/calculateDays';
import { request } from '../utils/request';


const baseUrl = 'http://localhost:3030/data/offers';

export const getAllOffers = async () => {
    try {
        const result = await request('GET', baseUrl);

        return result;
    } catch(error) {
        console.log(error);
    }
};

export const getOneOffer = async (offerId) => {
    try {
        const result = await request('GET', `${baseUrl}/${offerId}`);

        return result;
    } catch(error) {
        console.log(error);
    }
};

export const getFilteredOffers = async (filteredValues) => { 
    try {
        const allOffers = await request('GET', baseUrl);
        const filteredOffers = [];
    
        allOffers.forEach(offer => {
            const calcDays = calculateDays(offer.startDate, offer.endDate);
    
            
            if (Number(filteredValues.price) >= offer.price && Number(filteredValues.days) >= calcDays){
                filteredOffers.push(offer);
            }
        });
        
        return filteredOffers;
    } catch(error) {
        console.log(error);
    }
};

export const create = async (offerData) => {
    try {
        const result = await request('POST', baseUrl, offerData);

        return result;
    } catch(error) {
        console.log(error);
    }
};
 

export const edit = async (offerId, offerData) => {
    try {
        const result = await request('PUT', `${baseUrl}/${offerId}`, offerData);

        return result;
    } catch(error) {
        console.log(error);
    }
};

export const remove = async (offerId) => {
    try {
        const result = await request('DELETE', `${baseUrl}/${offerId}`);

        return result;
    } catch(error) {
        console.log(error);
    }
};