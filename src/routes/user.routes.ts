import { Router } from 'express';
import { createUserController, getUsersController, getMeController, patchUserController } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();


router.post('/users', authMiddleware(['ADMIN']), createUserController);
router.patch('/users/:id', authMiddleware(), patchUserController);
router.get('/users', authMiddleware(), getUsersController);
router.get('/users/me', authMiddleware(), getMeController);

export default router;
