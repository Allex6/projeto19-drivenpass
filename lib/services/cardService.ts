import cardRepository from '../repositories/cardRepository';
import errorFactory from '../utils/errorFactory';
import { CardCreate } from './../types/cardTypes';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

const CRYPTR_SECRET = process.env.CRYPTR_SECRET || 'strong secret';

const cryptr = new Cryptr(CRYPTR_SECRET);

async function createCard(loggedUser: number, cardData: CardCreate){
    
    if(loggedUser !== cardData.userId) throw errorFactory('unauthorized', 'Invalid user ID.');

    const credentialWithSameLabel = await cardRepository.findByLabelAndUserId(cardData.userId, cardData.label);

    if(credentialWithSameLabel) throw errorFactory('conflict', 'There is already a credential registered with this label/title on your account.');

    cardData.securityCode = cryptr.encrypt(cardData.securityCode);
    cardData.password = cryptr.encrypt(cardData.password);

    await cardRepository.create(cardData);

}

async function getById(loggedUser: number, id: number){

    const card = await cardRepository.getById(id);
    if(!card || card.userId !== loggedUser) throw errorFactory('not_found', 'Could not find the card.');

    return card;

}

async function list(loggedUser: number){

    const cards = await cardRepository.list(loggedUser);
    return cards;

}

async function deleteCard(loggedUser: number, id: number){

    const card = await cardRepository.getById(id);
    if(!card || card.userId !== loggedUser) throw errorFactory('not_found', 'Could not find the card.');

    await cardRepository.deleteCard(id);

}

export default {
    createCard,
    getById,
    list,
    deleteCard
}