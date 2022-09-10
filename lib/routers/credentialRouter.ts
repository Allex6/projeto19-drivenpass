import { Router } from 'express';
import credentialController from '../controllers/credentialController';
import schemaValidator from '../middlewares/schemaValidator';
import credentialSchema from '../schemas/credentialSchema';

const router = Router();

router.post('/', 
    schemaValidator(credentialSchema), 
    credentialController.createCredential
);

router.get('/', 
    credentialController.list
);

router.get('/:id',
    credentialController.getById
);

router.put('/:id',
    credentialController.updateCredential
);

router.delete('/:id',
    credentialController.deleteCredential
);

export default router;