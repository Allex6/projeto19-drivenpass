import wifiService from './../services/wifiService';
import { Request, Response, NextFunction } from 'express';

async function createWifi(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    const { loggedUser } = res.locals;
    await wifiService.createWifi(Number(loggedUser), bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    const wifiData = await wifiService.getById(Number(loggedUser), Number(id));
    res.send(wifiData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const { loggedUser } = res.locals;
    const wifis = await wifiService.list(Number(loggedUser));
    res.send(wifis);

}

async function deleteWifi(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    await wifiService.deleteWifi(Number(loggedUser), Number(id));
    res.sendStatus(200);

}

export default {
    createWifi,
    getById,
    list,
    deleteWifi
}