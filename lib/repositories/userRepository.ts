import prisma from '../databases/prisma';
import { UserCreate } from './../types/userTypes';

/**
 * @description Insert a new user record into the database.
 * @param {UserCreate} userData An object with the fields needed to create a user
 */
async function create(userData: UserCreate){
    
    await prisma.users.create({
        data: userData
    });

}

async function findByEmail(email: string){

    const user = await prisma.users.findUnique({ where: { email } });
    return user;

}

export default {
    create,
    findByEmail
}