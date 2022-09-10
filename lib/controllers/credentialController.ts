import credentialService from './../services/credentialService';
import { Request, Response, NextFunction } from 'express';

async function createCredential(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await credentialService.createCredential(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const credentialData = await credentialService.getById(Number(id));
    res.send(credentialData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const credentials = await credentialService.list();
    res.send(credentials);

}

async function updateCredential(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await credentialService.updateCredential(Number(id), bodyData);
    res.sendStatus(200);

}

async function deleteCredential(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await credentialService.deleteCredential(Number(id));
    res.sendStatus(200);

}

export default {
    createCredential,
    getById,
    list,
    updateCredential,
    deleteCredential
}