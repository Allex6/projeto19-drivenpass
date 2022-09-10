import credentialRepository from '../repositories/credentialRepository';
import errorFactory from '../utils/errorFactory';
import { CredentialCreate } from './../types/credentialTypes';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

const CRYPTR_SECRET = process.env.CRYPTR_SECRET || 'strong secret';

const cryptr = new Cryptr(CRYPTR_SECRET);

async function createCredential(loggedUser: number, credentialData: CredentialCreate){
    
    if(loggedUser !== credentialData.userId) throw errorFactory('unauthorized', 'Invalid user ID.');

    const credentialWithSameLabel = await credentialRepository.findByLabelAndUserId(credentialData.userId, credentialData.label);

    if(credentialWithSameLabel) throw errorFactory('conflict', 'There is already a credential registered with this label/title on your account.');

    credentialData.password = cryptr.encrypt(credentialData.password);
    await credentialRepository.create(credentialData);

}

async function getById(userId: number, id: number){

    const credential = await credentialRepository.getById(id);
    if(!credential || credential.userId !== userId) throw errorFactory('not_found', 'Could not find the credential.');

    credential.password = cryptr.decrypt(credential.password);
    return credential;

}

async function list(userId: number){

    const credentials = await credentialRepository.list(userId);
    const processedCredentials = credentials.map(credential=>{

        credential.password = cryptr.decrypt(credential.password);
        return credential;

    });

    return processedCredentials;

}

async function deleteCredential(userId: number, id: number){

    const credential = await credentialRepository.getById(id);
    if(!credential || credential.userId !== userId) throw errorFactory('not_found', 'Could not find the credential.');

    await credentialRepository.deleteCredential(id);

}

export default {
    createCredential,
    getById,
    list,
    deleteCredential
}