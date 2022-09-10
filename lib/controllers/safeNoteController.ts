import safeNoteService from './../services/safeNoteService';
import { Request, Response, NextFunction } from 'express';

async function createSafeNote(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    const { loggedUser } = res.locals;
    await safeNoteService.createSafeNote(Number(loggedUser), bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    const safeNoteData = await safeNoteService.getById(Number(loggedUser), Number(id));
    res.send(safeNoteData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const { loggedUser } = res.locals;
    const safeNotes = await safeNoteService.list(Number(loggedUser));
    res.send(safeNotes);

}

async function deleteSafeNote(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const { loggedUser } = res.locals;
    await safeNoteService.deleteSafeNote(Number(loggedUser), Number(id));
    res.sendStatus(200);

}

export default {
    createSafeNote,
    getById,
    list,
    deleteSafeNote
}