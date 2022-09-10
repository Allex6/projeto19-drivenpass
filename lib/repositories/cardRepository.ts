import prisma from '../databases/prisma';
import { CardCreate } from './../types/cardTypes';

/**
 * @description Insert a new card record into the database.
 * @param {Object} cardData An object with the fields needed to create a card
 */
async function create(cardData: CardCreate){
    
    await prisma.cards.create({ data: cardData });

}

/**
 * @description Search for a card by ID.
 * @param {Number} id The card id saved in the database.
 * @returns The card saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await prisma.cards.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of cards.
 * @returns A list of cards.
 */
async function list(userId: number){

    const cards = await prisma.cards.findMany({ where: { userId } });
    return cards;

}

/**
 * @description Deletes a card by ID.
 * @param {Number} id The card id saved in the database.
 */
async function deleteCard(id: number){

    await prisma.cards.delete({
        where: {
            id
        },
    });

}

async function findByLabelAndUserId(userId: number, label: string){

    const credential = await prisma.credentials.findFirst({
        where: {
            label,
            userId
        }
    });

    return credential;

}

export default {
    create,
    getById,
    list,
    deleteCard,
    findByLabelAndUserId
}