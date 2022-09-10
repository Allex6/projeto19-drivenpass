import cardService from './../services/cardService';
import { Request, Response, NextFunction } from 'express';

async function createCard(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    const { loggedUser } = res.locals;
    await cardService.createCard(Number(loggedUser), bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    const cardData = await cardService.getById(Number(loggedUser), Number(id));
    res.send(cardData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const { loggedUser } = res.locals;
    const cards = await cardService.list(Number(loggedUser));
    res.send(cards);

}

async function deleteCard(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    await cardService.deleteCard(Number(loggedUser), Number(id));
    res.sendStatus(200);

}

export default {
    createCard,
    getById,
    list,
    deleteCard
}