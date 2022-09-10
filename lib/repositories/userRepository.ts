import postgres from './../databases/postgres';

/**
 * @description Insert a new user record into the database.
 * @param {Object} userData An object with the fields needed to create a user
 */
async function create(userData: { email: any, password: any }){
    
	 const { email, password } = userData;
    await postgres.user.create({ email, password });

}

/**
 * @description Search for a user by ID.
 * @param {Number} id The user id saved in the database.
 * @returns The user saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await postgres.user.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of users.
 * @returns A list of users.
 */
async function list(){

    return await postgres.user.findMany();

}

/**
 * @description Updates all data of a single record of user
 * @param {Object} userData An object with the fields needed to update a user
 */
async function update(id: number, userData: { email: any, password: any }){
    
	 const { email, password } = userData;
    await postgres.user.update({
        where: {
            id
        },
        data: {
            email, password
        }
    });

}

/**
 * @description Deletes a user by ID.
 * @param {Number} id The user id saved in the database.
 */
async function deleteUser(id: number){

    await postgres.user.delete({
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
    deleteUser
}