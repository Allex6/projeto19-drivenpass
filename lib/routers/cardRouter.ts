import { Router } from 'express';
import cardController from '../controllers/cardController';
import schemaValidator from '../middlewares/schemaValidator';
import cardSchema from '../schemas/cardSchema';

const router = Router();

router.post('/', 
    schemaValidator(cardSchema), 
    cardController.createCard
);

router.get('/', 
    cardController.list
);

router.get('/:id',
    cardController.getById
);

router.put('/:id',
    cardController.updateCard
);

router.delete('/:id',
    cardController.deleteCard
);

export default router;