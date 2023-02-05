import { type User,PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Users = [
    {
        id: 1,
        username: "TEST_USER",
        email: "test@gmail.com",
        firstName: "test",
        lastName: "test",
        password: "sss",
        googleId: null,
        image: null
    },
    {
        id: 2,
        username: "TEST_ADMIN",
        email: "admin@gmail.com",
        firstName: "admin",
        lastName: "admin",
        password: "sss",
        googleId: null,
        image: null
    }
] satisfies User[]

async function seed() {
    await prisma.$connect()
    await  prisma.user.deleteMany({ where:{} });
    await Promise.all(
        Users.map( user => prisma.user.create({data: user}))
    );
}

seed()
  .catch(async (e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })