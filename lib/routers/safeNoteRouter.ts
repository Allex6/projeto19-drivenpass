import { Router } from 'express';
import safeNoteController from '../controllers/safeNoteController';
import loginValidator from '../middlewares/loginValidator';
import schemaValidator from '../middlewares/schemaValidator';
import safeNoteSchema from '../schemas/safeNoteSchema';

const router = Router();

router.post('/', 
    loginValidator,
    schemaValidator(safeNoteSchema), 
    safeNoteController.createSafeNote
);

router.get('/', 
    loginValidator,
    safeNoteController.list
);

router.get('/:id',
    loginValidator,
    safeNoteController.getById
);

router.delete('/:id',
    loginValidator,
    safeNoteController.deleteSafeNote
);

export default router;