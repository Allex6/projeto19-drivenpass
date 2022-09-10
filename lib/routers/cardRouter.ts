import { Router } from 'express';
import cardController from '../controllers/cardController';
import loginValidator from '../middlewares/loginValidator';
import schemaValidator from '../middlewares/schemaValidator';
import cardSchema from '../schemas/cardSchema';

const router = Router();

router.post('/',
    loginValidator,
    schemaValidator(cardSchema), 
    cardController.createCard
);

router.get('/',
    loginValidator,
    cardController.list
);

router.get('/:id',
    loginValidator,
    cardController.getById
);

router.delete('/:id',
    loginValidator,
    cardController.deleteCard
);

export default router;