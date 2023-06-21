import {Router} from 'express';
import ondc from './ondc.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('From API Base url!');
    }
);

router.use('/ondc', ondc);


export default router;