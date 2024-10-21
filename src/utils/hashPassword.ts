import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword
};

export const comparePassword = async (password: string, userPassword: string) => {
  if (password == userPassword) return true
  const passwordMatch = await bcrypt.compare(password, userPassword);
  return passwordMatch
}
