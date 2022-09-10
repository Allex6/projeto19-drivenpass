import { Router } from 'express';
import wifiController from '../controllers/wifiController';
import loginValidator from '../middlewares/loginValidator';
import schemaValidator from '../middlewares/schemaValidator';
import wifiSchema from '../schemas/wifiSchema';

const router = Router();

router.post('/', 
    loginValidator,
    schemaValidator(wifiSchema), 
    wifiController.createWifi
);

router.get('/', 
    loginValidator,
    wifiController.list
);

router.get('/:id',
    loginValidator,
    wifiController.getById
);

router.delete('/:id',
    loginValidator,
    wifiController.deleteWifi
);

export default router;