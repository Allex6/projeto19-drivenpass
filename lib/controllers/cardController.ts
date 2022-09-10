import cardService from './../services/cardService';
import { Request, Response, NextFunction } from 'express';

async function createCard(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await cardService.createCard(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const cardData = await cardService.getById(Number(id));
    res.send(cardData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const cards = await cardService.list();
    res.send(cards);

}

async function updateCard(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await cardService.updateCard(Number(id), bodyData);
    res.sendStatus(200);

}

async function deleteCard(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await cardService.deleteCard(Number(id));
    res.sendStatus(200);

}

export default {
    createCard,
    getById,
    list,
    updateCard,
    deleteCard
}