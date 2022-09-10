import postgres from './../databases/postgres';

/**
 * @description Insert a new wifi record into the database.
 * @param {Object} wifiData An object with the fields needed to create a wifi
 */
async function create(wifiData: { userId: any, label: any, name: any, password: any }){
    
	 const { userId, label, name, password } = wifiData;
    await postgres.wifi.create({ userId, label, name, password });

}

/**
 * @description Search for a wifi by ID.
 * @param {Number} id The wifi id saved in the database.
 * @returns The wifi saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await postgres.wifi.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of wifis.
 * @returns A list of wifis.
 */
async function list(){

    return await postgres.wifi.findMany();

}

/**
 * @description Updates all data of a single record of wifi
 * @param {Object} wifiData An object with the fields needed to update a wifi
 */
async function update(id: number, wifiData: { userId: any, label: any, name: any, password: any }){
    
	 const { userId, label, name, password } = wifiData;
    await postgres.wifi.update({
        where: {
            id
        },
        data: {
            userId, label, name, password
        }
    });

}

/**
 * @description Deletes a wifi by ID.
 * @param {Number} id The wifi id saved in the database.
 */
async function deleteWifi(id: number){

    await postgres.wifi.delete({
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
    deleteWifi
}