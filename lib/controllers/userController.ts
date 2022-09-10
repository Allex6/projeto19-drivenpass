import userService from './../services/userService';
import { Request, Response, NextFunction } from 'express';

async function createUser(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await userService.createUser(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const userData = await userService.getById(Number(id));
    res.send(userData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const users = await userService.list();
    res.send(users);

}

async function updateUser(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await userService.updateUser(Number(id), bodyData);
    res.sendStatus(200);

}

async function deleteUser(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await userService.deleteUser(Number(id));
    res.sendStatus(200);

}

export default {
    createUser,
    getById,
    list,
    updateUser,
    deleteUser
}