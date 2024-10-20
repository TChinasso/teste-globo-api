import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Usuario padrao', email: 'usuariocomum@teste.com.br', access_level: 'USER', password: '123456' },
      { name: 'Usuario admin', email: 'usuarioadm@teste.com.br', access_level: 'ADMIN', password: '123456' },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });