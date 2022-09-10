import { Request, Response, NextFunction } from 'express';
function errorHandler(error: Error | { type: string, message: string | number }, req: Request, res: Response, next: NextFunction){

    if(error.type === 'not_found') res.status(404).send(error.message);
    if(error.type === 'conflict') res.status(422).send(error.message);

    return res.sendStatus(500);

};

export default errorHandler;