import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import errorFactory from './../utils/errorFactory';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'strong secret';

function getToken(req: Request){

    const authorization = req.headers['authorization'];
    const splitted = authorization?.split(' ');

    return (splitted && splitted.length > 0) ? splitted[1] : null;

}

function loginValidator(req: Request, res: Response, next: NextFunction){

    const token = getToken(req);
    const defaultInvalidTokenError = errorFactory('unauthorized', 'invalid token.');

    if(!token) throw defaultInvalidTokenError;

    try {

        const result: any = jwt.verify(token, JWT_SECRET);
        res.locals.loggedUser = result.id;
        next();
        
    } catch (err) {
        console.log('err -------------', err);
        res.status(401).send(defaultInvalidTokenError.message);
    }

};

export default loginValidator;