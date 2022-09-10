import { Router } from 'express';
import userController from '../controllers/userController';
import schemaValidator from '../middlewares/schemaValidator';
import userSchema from '../schemas/userSchema';

const router = Router();

router.post('/', 
    schemaValidator(userSchema), 
    userController.createUser
);

router.get('/', 
    userController.list
);

router.get('/:id',
    userController.getById
);

router.put('/:id',
    userController.updateUser
);

router.delete('/:id',
    userController.deleteUser
);

export default router;