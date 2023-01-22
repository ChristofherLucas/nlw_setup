import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.habit.deleteMany();
  await prisma.habit.create({
    data: {
      title: "Beber 2L de água",
      created_at: new Date(2023, 20, 1),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
  });
