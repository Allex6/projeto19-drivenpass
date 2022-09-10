import userService from './../services/userService';
import { Request, Response, NextFunction } from 'express';

async function createUser(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await userService.createUser(bodyData);
    res.sendStatus(201);

}

async function login(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    const token = await userService.login(bodyData);
    res.send({ token });

}

export default {
    createUser,
    login
}