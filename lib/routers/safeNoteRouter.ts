import { Router } from 'express';
import safeNoteController from '../controllers/safeNoteController';
import schemaValidator from '../middlewares/schemaValidator';
import safeNoteSchema from '../schemas/safeNoteSchema';

const router = Router();

router.post('/', 
    schemaValidator(safeNoteSchema), 
    safeNoteController.createSafeNote
);

router.get('/', 
    safeNoteController.list
);

router.get('/:id',
    safeNoteController.getById
);

router.put('/:id',
    safeNoteController.updateSafeNote
);

router.delete('/:id',
    safeNoteController.deleteSafeNote
);

export default router;