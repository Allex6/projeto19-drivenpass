import postgres from './../databases/postgres';

/**
 * @description Insert a new card record into the database.
 * @param {Object} cardData An object with the fields needed to create a card
 */
async function create(cardData: { userId: any, label: any, cardNumber: any, cardHolderName: any, securityCode: any, expirationDate: any, password: any, isVirtual: any, type: any }){
    
	 const { userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type } = cardData;
    await postgres.card.create({ userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type });

}

/**
 * @description Search for a card by ID.
 * @param {Number} id The card id saved in the database.
 * @returns The card saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await postgres.card.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of cards.
 * @returns A list of cards.
 */
async function list(){

    return await postgres.card.findMany();

}

/**
 * @description Updates all data of a single record of card
 * @param {Object} cardData An object with the fields needed to update a card
 */
async function update(id: number, cardData: { userId: any, label: any, cardNumber: any, cardHolderName: any, securityCode: any, expirationDate: any, password: any, isVirtual: any, type: any }){
    
	 const { userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type } = cardData;
    await postgres.card.update({
        where: {
            id
        },
        data: {
            userId, label, cardNumber, cardHolderName, securityCode, expirationDate, password, isVirtual, type
        }
    });

}

/**
 * @description Deletes a card by ID.
 * @param {Number} id The card id saved in the database.
 */
async function deleteCard(id: number){

    await postgres.card.delete({
        where: {
            id
        },
    });

}

export default {
    create,
    getById,
    list,
    update,
    deleteCard
}