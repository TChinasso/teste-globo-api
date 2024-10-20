import { Router } from 'express';
import { signInController, signUpController, checkIfEmailExistisController } from '../controllers/oauth.controller';

const router = Router();

router.post('/oauth/signup', signUpController);
router.post('/oauth/signup/validate_email', checkIfEmailExistisController);

router.post('/oauth/signin', signInController);

export default router;
