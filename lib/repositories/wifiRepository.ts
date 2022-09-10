import prisma from '../databases/prisma';
import { WifiCreate } from './../types/wifiTypes';

/**
 * @description Insert a new wifi record into the database.
 * @param {WifiCreate} wifiData An object with the fields needed to create a wifi
 */
async function create(wifiData: WifiCreate){
    
    await prisma.wifis.create({ data: wifiData });

}

/**
 * @description Search for a wifi by ID.
 * @param {Number} id The wifi id saved in the database.
 * @returns The wifi saved in the database, or null if it does not exists.
 */
async function getById(id: number){

    return await prisma.wifis.findUnique({
        where: {
            id
        }
    });

}

/**
 * @description Search for a list of wifis.
 * @returns A list of wifis.
 */
async function list(userId: number){

    const wifis = await prisma.wifis.findMany({ where: { userId } });
    return wifis;

}

/**
 * @description Deletes a wifi by ID.
 * @param {Number} id The wifi id saved in the database.
 */
async function deleteWifi(id: number){

    await prisma.wifis.delete({
        where: {
            id
        },
    });

}

async function findByLabelAndUserId(userId: number, label: string){

    const wifi = await prisma.wifis.findFirst({
        where: {
            label,
            userId
        }
    });

    return wifi;

}

export default {
    create,
    getById,
    list,
    deleteWifi,
    findByLabelAndUserId
}