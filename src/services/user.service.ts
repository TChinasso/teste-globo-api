import { PrismaClient, Prisma, User } from '@prisma/client';
import { hashPassword } from '../utils/hashPassword';
import jwt, { JwtPayload } from 'jsonwebtoken'
const prisma = new PrismaClient();

export const createUser = async (data: Prisma.UserCreateInput) => {
  data.password = await hashPassword(data.password);
  
  return prisma.user.create({
    data,
  });
};

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getMe = (token: string = '') => {
  const user = jwt.decode(token) as UserDecodedJwtPayload | null
  return prisma.user.findUnique({
    where: {
      email: user?.email
    }
  })

}

export const patchUser = (id: number, user: Partial<User>) => {
  return prisma.user.update({
    where: {id},
    data: user
  })
}


type UserDecodedJwtPayload = JwtPayload & User