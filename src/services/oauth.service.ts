import jwt from 'jsonwebtoken';
import { PrismaClient, Role } from '@prisma/client';
import { hashPassword, comparePassword } from '../utils/hashPassword';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!

export const signUp = async (name: string, email: string, password: string, accessLevel: Role = 'USER') => {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      access_level: accessLevel,
      password: hashedPassword,
    },
  });

  return user;
};

export const signIn = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const passwordMatch = await comparePassword(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email, accessLevel: user.access_level },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  return { token, user };
};

export const checkIfEmailExistis = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (user) return true
  return false
}
