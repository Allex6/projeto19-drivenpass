import { Router } from 'express';
import wifiController from '../controllers/wifiController';
import schemaValidator from '../middlewares/schemaValidator';
import wifiSchema from '../schemas/wifiSchema';

const router = Router();

router.post('/', 
    schemaValidator(wifiSchema), 
    wifiController.createWifi
);

router.get('/', 
    wifiController.list
);

router.get('/:id',
    wifiController.getById
);

router.put('/:id',
    wifiController.updateWifi
);

router.delete('/:id',
    wifiController.deleteWifi
);

export default router;