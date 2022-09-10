import postgres from './../databases/postgres';

/**
 * @description Insert a new safeNote record into the database.
 * @param {Object} safeNoteData An object with the fields needed to create a safeNote
 */
async function create(safeNoteData: { userId: any, label: any, content: any }){
    
	 const { userId, label, content } = safeNoteData;
    await postgres.safeNote.create({ userId, label, content });

}

/**
 * @description Search for a safeNote by ID.
 * @param {Number} id The safeNote id saved in the database.
 * @returns The safeNote saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await postgres.safeNote.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of safeNotes.
 * @returns A list of safeNotes.
 */
async function list(){

    return await postgres.safeNote.findMany();

}

/**
 * @description Updates all data of a single record of safeNote
 * @param {Object} safeNoteData An object with the fields needed to update a safeNote
 */
async function update(id: number, safeNoteData: { userId: any, label: any, content: any }){
    
	 const { userId, label, content } = safeNoteData;
    await postgres.safeNote.update({
        where: {
            id
        },
        data: {
            userId, label, content
        }
    });

}

/**
 * @description Deletes a safeNote by ID.
 * @param {Number} id The safeNote id saved in the database.
 */
async function deleteSafeNote(id: number){

    await postgres.safeNote.delete({
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
    deleteSafeNote
}