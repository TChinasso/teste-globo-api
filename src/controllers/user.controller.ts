import { Request, Response } from 'express';
import { createUser, getAllUsers, getMe, patchUser } from '../services/user.service';
import { User } from '@prisma/client';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve users' });
  }
};

export const getMeController = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const user = await getMe(token);
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve user' });
  }
};

export const patchUserController = async (req: Request<{id: string}, {}, Partial<User>>, res: Response) => {
  try {
    const userIdToBePatched = Number(req.params.id)
    const payload = req.body
    const patchedUser = await patchUser(userIdToBePatched, payload)
    res.status(200).json(patchedUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to patch user' });
  }
};
