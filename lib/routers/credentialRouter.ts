import { Router } from 'express';
import credentialController from '../controllers/credentialController';
import loginValidator from '../middlewares/loginValidator';
import schemaValidator from '../middlewares/schemaValidator';
import credentialSchema from '../schemas/credentialSchema';

const router = Router();

router.post('/', 
    loginValidator,
    schemaValidator(credentialSchema),
    credentialController.createCredential
);

router.get('/',
    loginValidator,
    credentialController.list
);

router.get('/:id',
    loginValidator,
    credentialController.getById
);

router.delete('/:id',
    loginValidator,
    credentialController.deleteCredential
);

export default router;