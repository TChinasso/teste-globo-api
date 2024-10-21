import { Router } from 'express';
import { getChartsController } from '../controllers/chart.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
const router = Router();

router.get('/charts', authMiddleware(), getChartsController)

export default router;