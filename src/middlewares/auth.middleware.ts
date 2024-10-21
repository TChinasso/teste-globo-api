import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { decodeJwtUser } from '../utils/jwtUtils';

const JWT_SECRET = process.env.JWT_SECRET!;

export const authMiddleware = (allowedRoles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const token = req.headers.authorization?.split(' ')[1];


    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decodedUser = decodeJwtUser(token) || {} as any
      jwt.verify(token, JWT_SECRET);
      if (allowedRoles) {
        const isAllowed = allowedRoles.includes(decodedUser?.access_level)
        if (!isAllowed) throw new Error()
      }
      next();
    } catch (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
  };
}
