import wifiRepository from '../repositories/wifiRepository';
import errorFactory from '../utils/errorFactory';

async function createWifi(wifiData: { userId: any, label: any, name: any, password: any }){
    
	 const { userId, label, name, password} = wifiData;
    await wifiRepository.create({ userId, label, name, password });

}

async function getById(id: number){

    await wifiRepository.getById(id);

}

async function list(){

    await wifiRepository.list();

}

async function updateWifi(id: number, wifiData: { userId: any, label: any, name: any, password: any }){
    
	 const { userId, label, name, password } = wifiData;
    await wifiRepository.update(id, { userId, label, name, password });

}

async function deleteWifi(id: number){

    await wifiRepository.deleteWifi(id);

}

export default {
    createWifi,
    getById,
    list,
    updateWifi,
    deleteWifi
}