import safeNoteService from './../services/safeNoteService';
import { Request, Response, NextFunction } from 'express';

async function createSafeNote(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await safeNoteService.createSafeNote(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const safeNoteData = await safeNoteService.getById(Number(id));
    res.send(safeNoteData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const safeNotes = await safeNoteService.list();
    res.send(safeNotes);

}

async function updateSafeNote(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await safeNoteService.updateSafeNote(Number(id), bodyData);
    res.sendStatus(200);

}

async function deleteSafeNote(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await safeNoteService.deleteSafeNote(Number(id));
    res.sendStatus(200);

}

export default {
    createSafeNote,
    getById,
    list,
    updateSafeNote,
    deleteSafeNote
}