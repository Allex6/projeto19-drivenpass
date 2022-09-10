import cardRepository from '../repositories/cardRepository';
import errorFactory from '../utils/errorFactory';

async function createCard(cardData: { userId: any, label: any, cardNumber: any, cardHolderName: any, securityCode: any, expirationDate: any, password: any, isVirtual: any, type: any }){
    
	 const { userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type} = cardData;
    await cardRepository.create({ userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type });

}

async function getById(id: number){

    await cardRepository.getById(id);

}

async function list(){

    await cardRepository.list();

}

async function updateCard(id: number, cardData: { userId: any, label: any, cardNumber: any, cardHolderName: any, securityCode: any, expirationDate: any, password: any, isVirtual: any, type: any }){
    
	 const { userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type } = cardData;
    await cardRepository.update(id, { userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type });

}

async function deleteCard(id: number){

    await cardRepository.deleteCard(id);

}

export default {
    createCard,
    getById,
    list,
    updateCard,
    deleteCard
}