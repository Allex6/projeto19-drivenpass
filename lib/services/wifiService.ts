import wifiRepository from '../repositories/wifiRepository';
import errorFactory from '../utils/errorFactory';
import { WifiCreate } from './../types/wifiTypes';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

const CRYPTR_SECRET = process.env.CRYPTR_SECRET || 'strong secret';

const cryptr = new Cryptr(CRYPTR_SECRET);

async function createWifi(loggedUser: number, wifiData: WifiCreate){

    const wifi = await wifiRepository.findByLabelAndUserId(loggedUser, wifiData.label);
    if(wifi) throw errorFactory('conflict', 'There is already a wifi registered with this label/title on your account.');
    
    wifiData.password = cryptr.encrypt(wifiData.password);
    await wifiRepository.create(wifiData);

}

async function getById(loggedUser: number, id: number){

    const wifi = await wifiRepository.getById(id);
    if(!wifi || wifi.userId !== loggedUser) throw errorFactory('not_found', 'Could not find the wifi.');

    return wifi;

}

async function list(loggedUser: number){

    const wifis = await wifiRepository.list(loggedUser);
    return wifis;

}

async function deleteWifi(loggedUser: number, id: number){

    const wifi = await wifiRepository.getById(id);
    if(!wifi || wifi.userId !== loggedUser) throw errorFactory('not_found', 'Could not find the wifi.');

    await wifiRepository.deleteWifi(id);

}

export default {
    createWifi,
    getById,
    list,
    deleteWifi
}