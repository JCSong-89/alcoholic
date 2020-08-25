import {Router} from 'express';
import loginAccount from '../../services/account/login'

const router = Router();

router.post('/', loginAccount);

export default router;