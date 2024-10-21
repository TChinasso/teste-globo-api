import { PrismaClient, Prisma, User } from '@prisma/client';
import { hashPassword } from '../utils/hashPassword';
import { decodeJwtUser } from '../utils/jwtUtils'
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
  const user = decodeJwtUser(token)
  return prisma.user.findUnique({
    where: {
      email: user?.email
    }
  })

}

export const patchUser = (id: number, user: Partial<User>) => {
  return prisma.user.update({
    where: { id },
    data: user
  })
}
