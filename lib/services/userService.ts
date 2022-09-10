import userRepository from '../repositories/userRepository';
import errorFactory from '../utils/errorFactory';

async function createUser(userData: { email: any, password: any }){
    
	 const { email, password} = userData;
    await userRepository.create({ email, password });

}

async function getById(id: number){

    await userRepository.getById(id);

}

async function list(){

    await userRepository.list();

}

async function updateUser(id: number, userData: { email: any, password: any }){
    
	 const { email, password } = userData;
    await userRepository.update(id, { email, password });

}

async function deleteUser(id: number){

    await userRepository.deleteUser(id);

}

export default {
    createUser,
    getById,
    list,
    updateUser,
    deleteUser
}