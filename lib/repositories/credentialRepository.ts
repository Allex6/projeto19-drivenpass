import postgres from './../databases/postgres';

/**
 * @description Insert a new credential record into the database.
 * @param {Object} credentialData An object with the fields needed to create a credential
 */
async function create(credentialData: { userId: any, label: any, url: any, username: any, password: any }){
    
	 const { userId, label, url, username, password } = credentialData;
    await postgres.credential.create({ userId, label, url, username, password });

}

/**
 * @description Search for a credential by ID.
 * @param {Number} id The credential id saved in the database.
 * @returns The credential saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await postgres.credential.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of credentials.
 * @returns A list of credentials.
 */
async function list(){

    return await postgres.credential.findMany();

}

/**
 * @description Updates all data of a single record of credential
 * @param {Object} credentialData An object with the fields needed to update a credential
 */
async function update(id: number, credentialData: { userId: any, label: any, url: any, username: any, password: any }){
    
	 const { userId, label, url, username, password } = credentialData;
    await postgres.credential.update({
        where: {
            id
        },
        data: {
            userId, label, url, username, password
        }
    });

}

/**
 * @description Deletes a credential by ID.
 * @param {Number} id The credential id saved in the database.
 */
async function deleteCredential(id: number){

    await postgres.credential.delete({
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
    deleteCredential
}