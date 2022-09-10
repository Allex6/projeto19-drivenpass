import credentialService from './../services/credentialService';
import { Request, Response, NextFunction } from 'express';

async function createCredential(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    const { loggedUser } = res.locals;
    await credentialService.createCredential(loggedUser, bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    const credentialData = await credentialService.getById(Number(loggedUser), Number(id));
    res.send(credentialData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const { loggedUser } = res.locals;
    const credentials = await credentialService.list(Number(loggedUser));
    res.send(credentials);

}

async function deleteCredential(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    await credentialService.deleteCredential(Number(loggedUser), Number(id));
    res.sendStatus(200);

}

export default {
    createCredential,
    getById,
    list,
    deleteCredential
}