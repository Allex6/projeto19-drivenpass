import { Router } from 'express';
import userController from '../controllers/userController';
import schemaValidator from '../middlewares/schemaValidator';
import userSchema from '../schemas/userSchema';

const router = Router();

router.post('/', 
    schemaValidator(userSchema), 
    userController.createUser
);

router.post('/login',
    userController.login
);

export default router;