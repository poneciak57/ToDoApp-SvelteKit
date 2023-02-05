import { type User,PrismaClient,type Item } from '@prisma/client';
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

const Items = [
  { 
    id: undefined,
    title: "test",
    content: "test",
    done: false,
    authorId: 1
  },
  { 
    id: undefined,
    title: "test2",
    content: "test2",
    done: false,
    authorId: 1
  }
]satisfies {
  id: undefined;
  title: string;
  content: string;
  done: boolean
  authorId: number
}[];


async function seed() {
    await prisma.$connect()
    await  prisma.user.deleteMany({ where:{} });
    await  prisma.item.deleteMany({ where:{} });
    await Promise.all(
      Users.map( user => prisma.user.create({data: user}))
    );
    await Promise.all(
      Items.map( item => prisma.item.create({data: item}))
    );
}

seed()
  .catch(async (e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })