import {Router} from 'express';
import ondc from './ondc.js';
import baptest from './baptest.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('From API Base url!');
    }
);

router.use('/ondc', ondc);
router.use('/bap',baptest)


export default router;