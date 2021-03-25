import { Router } from 'express';
import MovementController from '../controllers/MovementController';

const movementRouter = Router();

const movementController = new MovementController();

movementRouter.get('/', movementController.index);

movementRouter.post('/', movementController.create);

export default movementRouter;
