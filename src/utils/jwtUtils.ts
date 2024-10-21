import { User } from '@prisma/client'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const decodeJwtUser = (token: string): UserDecodedJwtPayload | null => {
  const user = jwt.decode(token) as UserDecodedJwtPayload | null
  return user
}



type UserDecodedJwtPayload = JwtPayload & User