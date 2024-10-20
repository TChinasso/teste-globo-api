import { Request, Response } from 'express';
import { signUp, signIn, checkIfEmailExistis } from '../services/oauth.service';

export const signUpController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await signUp(name, email, password);
    res.status(201).json(user);
  } catch (error: any) {
    console.error(error)
    res.status(400).json({ error: error.message });
  }
}

export const signInController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await signIn(email, password);
    res.status(200).json({ token, user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const checkIfEmailExistisController = async (req: Request, res: Response) => {
  const { email } = req.body
  const emailExists = await checkIfEmailExistis(email)
  if (emailExists) {
    res.status(409).json({ message: 'Email already exists' });
  } else {
    res.status(200).json('OK')
  }
}
