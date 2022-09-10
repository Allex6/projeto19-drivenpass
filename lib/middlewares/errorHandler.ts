import { Request, Response, NextFunction } from 'express';
function errorHandler(error: { type: string, message: string | number }, req: Request, res: Response, next: NextFunction){

    if(error.type === 'not_found') return res.status(404).send(error.message);
    if(error.type === 'conflict') return res.status(422).send(error.message);
    if(error.type === 'unauthorized') return res.status(401).send(error.message);

    return res.sendStatus(500);

};

export default errorHandler;