import { Router } from 'express';
import movementRouter from './movement.route';

const router = Router();

router.use('/movements', movementRouter);

export default router;
