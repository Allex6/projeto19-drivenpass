import wifiService from './../services/wifiService';
import { Request, Response, NextFunction } from 'express';

async function createWifi(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await wifiService.createWifi(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const wifiData = await wifiService.getById(Number(id));
    res.send(wifiData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const wifis = await wifiService.list();
    res.send(wifis);

}

async function updateWifi(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await wifiService.updateWifi(Number(id), bodyData);
    res.sendStatus(200);

}

async function deleteWifi(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await wifiService.deleteWifi(Number(id));
    res.sendStatus(200);

}

export default {
    createWifi,
    getById,
    list,
    updateWifi,
    deleteWifi
}