import credentialRepository from '../repositories/credentialRepository';
import errorFactory from '../utils/errorFactory';

async function createCredential(credentialData: { userId: any, label: any, url: any, username: any, password: any }){
    
	 const { userId, label, url, username, password} = credentialData;
    await credentialRepository.create({ userId, label, url, username, password });

}

async function getById(id: number){

    await credentialRepository.getById(id);

}

async function list(){

    await credentialRepository.list();

}

async function updateCredential(id: number, credentialData: { userId: any, label: any, url: any, username: any, password: any }){
    
	 const { userId, label, url, username, password } = credentialData;
    await credentialRepository.update(id, { userId, label, url, username, password });

}

async function deleteCredential(id: number){

    await credentialRepository.deleteCredential(id);

}

export default {
    createCredential,
    getById,
    list,
    updateCredential,
    deleteCredential
}