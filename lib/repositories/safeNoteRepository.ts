import prisma from '../databases/prisma';
import { SafeNoteCreate } from './../types/safeNoteTypes';

/**
 * @description Insert a new safeNote record into the database.
 * @param {Object} safeNoteData An object with the fields needed to create a safeNote
 */
async function create(safeNoteData: SafeNoteCreate){
    
    await prisma.safeNotes.create({ data: safeNoteData });

}

/**
 * @description Search for a safeNote by ID.
 * @param {Number} id The safeNote id saved in the database.
 * @returns The safeNote saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await prisma.safeNotes.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of safeNotes.
 * @returns A list of safeNotes.
 */
async function list(userId: number){

    const safeNotes = await prisma.safeNotes.findMany({
        where: { userId }
    });
    return safeNotes;

}

/**
 * @description Deletes a safeNote by ID.
 * @param {Number} id The safeNote id saved in the database.
 */
async function deleteSafeNote(id: number){

    await prisma.safeNotes.delete({
        where: {
            id
        },
    });

}

async function findByLabelAndUserId(userId: number, label: string){

    const safeNote = await prisma.safeNotes.findFirst({
        where: {
            label,
            userId
        }
    });

    return safeNote;

}

export default {
    create,
    getById,
    list,
    deleteSafeNote,
    findByLabelAndUserId
}