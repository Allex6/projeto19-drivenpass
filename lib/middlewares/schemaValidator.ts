import formatJoiErrors from './../utils/formatJoiErrors';
import { Request, Response, NextFunction } from 'express';
    
export default function validateSchemaMiddleware(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => { 

        const { error } = schema.validate(req.body);
        if (error) return res.status(422).send(formatJoiErrors(error));

        next();
    }
}