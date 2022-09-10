import prisma from '../databases/prisma';
import { CredentialCreate } from './../types/credentialTypes';

/**
 * @description Insert a new credential record into the database.
 * @param {Object} credentialData An object with the fields needed to create a credential
 */
async function create(credentialData: CredentialCreate){
    
    await prisma.credentials.create({ data: credentialData });

}

/**
 * @description Search for a credential by ID.
 * @param {Number} id The credential id saved in the database.
 * @returns The credential saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await prisma.credentials.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of credentials.
 * @param {Number} userId The user ID to use on where clause.
 * @returns A list of credentials.
 */
async function list(userId: number){

    const credentials = await prisma.credentials.findMany({
        where: { userId }
    });
    return credentials;

}

/**
 * @description Deletes a credential by ID.
 * @param {Number} id The credential id saved in the database.
 */
async function deleteCredential(id: number){

    await prisma.credentials.delete({
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
    deleteCredential,
    findByLabelAndUserId
}